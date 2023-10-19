import { displayBoard, displayMessage, displayTextMessage, displayTextMessageTwo }
  from './event-handlers.js';

displayMessage("Select a game mode to start a new match!", "white")
displayTextMessage("")
displayTextMessageTwo("")
let placedShips = [];
let aIShips = [];
let ourShots = [];
let aIShots = [];
export let hasGameStarted = false;
export let ourBoard = {};
export let aIBoard = {};

//OPT
let aIHits = [];
function smartAI(coordinates) { // ne lőjön az AI olyan helyre, ami találattal szomszédos
  let isValid = true;
  aIHits.forEach(hitCoordinates => {
    if (hitCoordinates.x === coordinates.x && Math.abs(hitCoordinates.y - coordinates.y) === 1) {
      isValid = false;
    }
    else if (hitCoordinates.y === coordinates.y && Math.abs(hitCoordinates.x - coordinates.x) === 1) {
      isValid = false;
    }
  })
  return isValid;
}

// END OF OPT
function boardCoordinate(coordinateX, coordinateY) { // x-y: a1 c3 -----> board[0][0] koordináták megfelelő alakba konvertálása
  const indexPair = {
    x: coordinateX.toLowerCase().charCodeAt(0) - 97,
    y: coordinateY - 1
  }
  return indexPair;
}

function createBoard(size) { // legenerál egy 'size' nagyságú pályát
  const board = [];
  for (let i = 0; i < size; i++) {
    board.push([]);
    for (let j = 0; j < size; j++) {
      board[i].push('');
    }
  }
  return board;
}

const placeShip = { // hajók lerakása AI és játékos szempontjából
  ai: function (coordinates, isValid) {
    if (isValid) aIBoard.board[coordinates.x][coordinates.y] = "  "
    else displayMessage("You can't place a ship there!", "white")
    displayBoard(aIBoard);
  },
  player: function (coordinates, isValid) {
    if (isValid) ourBoard.board[coordinates.x][coordinates.y] = "🚢"
    else displayMessage("You can't place a ship there!", "white")
    displayBoard(ourBoard);
  }
}

const shoot = {// lövések regisztrálása AI és játékos szempontjából
  ai: function (coordinates, isValid) {
    if (isValid) {
      if (ourBoard.board[coordinates.x][coordinates.y] === "🚢") {
        ourBoard.board[coordinates.x][coordinates.y] = "💥"
        displayTextMessageTwo("It's a hit!", "red")
        aIHits.push({ x: coordinates.x, y: coordinates.y });
        console.log(aIHits)
        setTimeout(function () {
          ourBoard.board[coordinates.x][coordinates.y] = "💀"
          displayBoard(ourBoard)
        }, 500);
      }
      else {
        ourBoard.board[coordinates.x][coordinates.y] = "💥";
        displayTextMessageTwo("It's a miss!", "green");
      }
    }
    displayBoard(ourBoard)
  },
  player: function (coordinates, isValid) {
    if (isValid) {
      if (aIBoard.board[coordinates.x][coordinates.y] === "  ") {
        aIBoard.board[coordinates.x][coordinates.y] = "💥"
        displayTextMessageTwo("It's a hit!", "green")
        setTimeout(function () {
          aIBoard.board[coordinates.x][coordinates.y] = "💀"
          displayBoard(aIBoard)
        }, 500)
      }
      else {
        aIBoard.board[coordinates.x][coordinates.y] = "💥";
        displayTextMessageTwo("It's a miss!", "red")
      }
    }

    else displayMessage("You can't shoot there!", "white")
    displayBoard(aIBoard);
  }
}

function validShot(shots, coordinates) { // leellenőrzi egy lövés hitelességét, hogy ne lőhessünk kétszer ugyanoda
  let isValid = true;
  shots.forEach(shot => {
    if (shot[0] === coordinates[0] && shot[1] === coordinates[1]) {
      isValid = false;
    }
  })
  return isValid;
}

function validPlacement(placedShips, coordinates) { // leellenőrzi egy hajó lerakásának hitelességét, megtiltja a hajók egymás melletti lerakását
  let isValid = true;
  placedShips.forEach(ship => {
    if (ship[0] === coordinates[0] && Math.abs(ship[1] - coordinates[1]) <= 1) {
      isValid = false;
    }
    else if (ship[1] === coordinates[1] && Math.abs(ship[0].charCodeAt(0) - coordinates[0].charCodeAt(0)) <= 1) {
      isValid = false;
    }
    else if (ship[0] === coordinates[0] && ship[1] === coordinates[1]) {
      isValid = false;
    }
  })
  return isValid;
}


function randomCoordinate() { // generál egy random koordinátapárt (hasonlóan az aIShoot függvényhez az event-handlersben)
  const randomX = String.fromCharCode(Math.floor(Math.random() * ourBoard.board.length) + 65);
  const randomY = Math.floor(Math.random() * ourBoard.board.length) + 1;

  return randomX + randomY;
}

function isGameOver() { // leellenőrzi a két játékos mezőit, és ha nem talál hajókat, véget vet a játéknak
  if (!ourBoard.board.join("").includes("🚢") || !aIBoard.board.join("").includes("  ")) {
    return true;
  }
  else return false;
}

function whoWon() { // leellenőrzi a két játékos mezőit, és eldönti a hajók hiányából, hogy ki nyert / vesztett
  if (!ourBoard.board.join("").includes("🚢")) {
    return "you lost"
  }
  else if (!aIBoard.board.join("").includes(" ")) {
    return "you win"
  }
}
/**
 * This function is called when you choose the game mode.
 * The caller gives you the data about what kind of game
 * the AI would like to play and where it places its ships.
 * @param {String} gameDescription - An encoded string of the game data.
 *    You have to parse to use it.
 */

export function selectGame(gameDescription) { // a data.js-ből kapott adatok alapján elvégzi egy játék előkészületeit

  let boardSize = 0;
  //gameDescription kulcs és értékre bontása
  let splitDescription = gameDescription.split(',');
  let unparsedSize = splitDescription.shift();
  let unparsedShips = splitDescription.join(',');
  //boardSize változó a kulcsból
  boardSize = parseInt(unparsedSize.replace("size:", ""));
  //ships rész tömbbé bontása
  let ships = unparsedShips.replace("s:", "").split(",");
  //Ships dolgozás és részekre bontás
  for (let i = 0; i < ships.length; i++) {
    ships[i] = ships[i].split(":")[1].trim();
    ships[i] = ships[i].replace("}", "");
  }
  let gameMode = {
    boardSize: boardSize,
    shipCoordinates: ships // [A1, C4]
  };
  ourBoard = { boardNumber: 1, board: createBoard(gameMode.boardSize) }
  aIBoard = { boardNumber: 2, board: createBoard(gameMode.boardSize) }
  gameMode.shipCoordinates.forEach(ship => {
    placeShip.ai(boardCoordinate(ship[0], ship[1]), true)
    aIShips.push(ship.toUpperCase())
  })
  displayBoard(ourBoard)
  displayMessage("Place your ships on your board!", "green")
  displayTextMessage(`You have ${gameMode.shipCoordinates.length} ship(s) left to place.`)
  displayTextMessageTwo("")
}

/**
 * Called whenever the player clicks on a cell.
 * @param {Object} clickProperties - The clicked cell's properties.
 *    It contains x and y coordinates, clickType that can be 'left' or 'right',
 *    and source that indicates the number of the board where the click happened.
 */

export function handleClick(clickProperties) { // elvégzi a kattintások megfelelő regisztrálását, pl. hajók lerakása, lövés

  const clickCoordinates = clickProperties.x + clickProperties.y
  const whichBoard = clickProperties.source;
  const ourBoardReduced = ourBoard.board.join("").replaceAll(",", "");
  const aIBoardReduced = aIBoard.board.join("").replaceAll(",", "");
  const boardCoordinates = boardCoordinate(clickProperties.x, clickProperties.y);
  const isPlaceValid = validPlacement(placedShips, clickCoordinates)
  const isShotValid = validShot(ourShots, clickCoordinates)


  displayTextMessage(`You have ${aIShips.length - placedShips.length} ship(s) left to place.`, "black")
  if (whichBoard === 2 && !hasGameStarted && ourBoardReduced.length < aIBoardReduced.length) {
    displayTextMessage("Use your own board!", "red");
    setTimeout(function () {
      displayTextMessage(`You have ${aIShips.length - placedShips.length} ship(s) left to place.`, "black")
    }, 500)
  }

  else if (whichBoard === 1 && ourBoardReduced.length < aIBoardReduced.length && !hasGameStarted) {
    placeShip.player(boardCoordinates, isPlaceValid);
    if (isPlaceValid) {
      placedShips.push(clickCoordinates)
    }
  }

  if (aIBoardReduced.length === ourBoardReduced.length && !hasGameStarted) {
    displayMessage("It's your turn to shoot!", "green");
    displayTextMessage("Click on a field of the enemy board to shoot!", "black");
    hasGameStarted = true;
  }

  if (!isGameOver() && hasGameStarted && (ourShots.length === aIShots.length)) {
    displayMessage("It's your turn to shoot!", "green");
    displayTextMessage("Click on a field of the enemy board to shoot!", "black")
    displayTextMessageTwo("")
    if (whichBoard === 2) {
      shoot.player(boardCoordinates, isShotValid)
      if (isShotValid) {
        ourShots.push(clickCoordinates)
      }
    }
    else if (whichBoard === 1) {
      displayTextMessage("You can't shoot on your own board.", "red");
      setTimeout(function () {
        displayTextMessage("Click on a field of the enemy board to shoot!", "black")
      }, 1500)
    }
  }
  else if (!isGameOver() && (aIShots.length < ourShots.length)) {
    displayMessage("It's the enemy's turn to shoot! Press the 'AI shoot' button!", "red")
    displayTextMessage(`You take a shot at ${ourShots[ourShots.length - 1]}.`, "black")
  }
  else if (isGameOver() && hasGameStarted) {
    displayMessage(`The game is over, ${whoWon()}.`, "white")
    displayTextMessage("Click the 'Restart Game' button to start a new game!")
    displayTextMessageTwo("")
  }
}

export function resetGame() { // a restart game gombhoz tartozó függvény, visszaállítja a változóinkat üresre / alaphelyzetbe
  placedShips = [];
  aIShips = [];
  ourShots = [];
  aIShots = [];
  aIHits = [];
  hasGameStarted = false;
  ourBoard = { boardNumber: 1, board: [] };
  aIBoard = { boardNumber: 2, board: [] };
  displayBoard(ourBoard);
  displayBoard(aIBoard);
  displayMessage("Select a game mode to start a new match!", "white")
  displayTextMessage("")
  displayTextMessageTwo("")
}

/**
 * This function is called when the player clicks on the AI shoot button.
 * The caller gives you randomly generated coordinates.
 * You may ignore the parameter later when you implement more intelligent AI.
 * @param {Object} coordinates - Random generated coordinates (x and y),
 *    where the AI would like to shoot.
 */
export function aiShoot(coordinates) { // az AI shoot gombhoz tartozó függvény, az AI lövéseit regisztrálja és kezeli
  if (coordinates.x !== " ") {
    console.log(boardCoordinate(coordinates.x, coordinates.y))
    console.log(smartAI(boardCoordinate(coordinates.x, coordinates.y)))
    const coordinatePair = coordinates.x + coordinates.y;
    const boardCoordinates = boardCoordinate(coordinates.x, coordinates.y);
    const isShotValid = validShot(aIShots, coordinatePair);
    let wasTheShotValid = true;
    displayMessage("It's the enemy's turn to shoot!", "red")
    displayTextMessage("Press the 'AI shoot' button!", "black")
    if (!isGameOver() && (aIShots.length < ourShots.length)) {
      if (isShotValid && smartAI(boardCoordinate(coordinates.x, coordinates.y))) {
        shoot.ai(boardCoordinates, isShotValid && smartAI(boardCoordinate(coordinates.x, coordinates.y)))
        aIShots.push(coordinatePair)
      }
      else {
        wasTheShotValid = false;
      }
      while (!wasTheShotValid) {
        let newCoordinates = randomCoordinate();
        console.log(smartAI(boardCoordinate(newCoordinates[0], newCoordinates[1])))
        if (validShot(aIShots, newCoordinates) && smartAI(boardCoordinate(newCoordinates[0], newCoordinates[1]))) {
          shoot.ai(boardCoordinate(newCoordinates[0], newCoordinates[1]), validShot(aIShots, newCoordinates) && smartAI(boardCoordinate(newCoordinates[0], newCoordinates[1])))
          aIShots.push(newCoordinates)
          wasTheShotValid = true;
        }
        else {
          wasTheShotValid = false;
        }
      }
    }
    else if (!isGameOver()) {
      displayMessage("It's your turn to shoot!", "green")
      displayTextMessage(`The AI takes a shot on ${aIShots[aIShots.length - 1]}.`, "black")
    }
    else {
      displayMessage(`The game is over, ${whoWon()}.`, "white")
      displayTextMessage("Click the 'Restart Game' button to start a new game!")
      displayTextMessageTwo("")
    }
  }
  else if(!isGameOver()) {
    displayMessage("It's your turn to shoot!", "green")
    displayTextMessage(`The AI takes a shot on ${aIShots[aIShots.length - 1]}.`, "black")
  }
  else if(isGameOver()) {
    displayMessage(`The game is over, ${whoWon()}.`, "white")
    displayTextMessage("Click the 'Restart Game' button to start a new game!")
    displayTextMessageTwo("")
  }
}