import { displayBoard, displayMessage, displayTextMessage }
  from './event-handlers.js';

let ourBoard = {};
let aIBoard = {};
export function selectGame(gameDescription) {
  
  let boardSize = 0;
  //gameDescription kulcs és értékre bontása
  let a = gameDescription.split(',');
  let key = a.shift();
  let val = a.join(',');
  //boardSize változó a kulcsból
  boardSize = parseInt(key.replace("size:", ""));
  //ships rész tömbbé bontása
  let ships = val.replace("s:", "");
  ships = ships.split(",");
  //Ships dolgozás és részekre bontás
  for (let i = 0; i < ships.length; i++) {
    ships[i] = ships[i].split(":")[1].trim();
    ships[i] = ships[i].replace("}", "");
  }
  let gameMode = {
    boardSize: boardSize,
    shipCoordinates: ships // [A1, C4]
  };
  ourBoard = {boardNumber: 1, board: createBoard(gameMode.boardSize)}
  aIBoard = {boardNumber: 2, board: createBoard(gameMode.boardSize)}
  gameMode.shipCoordinates.forEach(ship =>{
    placeShip(boardCoordinate(ship[0], ship[1]), aIBoard, true)
  })
  
  displayBoard(ourBoard)
}
function createBoard(size) {
  const board = [];
  for (let i = 0; i < size; i++) {
    board.push([]);
    for (let j = 0; j < size; j++) {
      board[i].push('');
    }
  }
  return board;
};


function boardCoordinate (coordinateX, coordinateY){ // x-y: a1 c3 -----> board[2][2]
  const indexPair = {
    x: coordinateX.toLowerCase().charCodeAt(0) - 97,
    y: coordinateY - 1
  }
  return indexPair;
}

function placeShip(coordinates, whoseBoard, isValid) {
  if(isValid) whoseBoard.board[coordinates.x][coordinates.y] = "Ship"
  else displayMessage("You can't place a ship there!")
  displayBoard(whoseBoard);
}

function validPlacement(placedShips, coordinates){
  let isValid = true;
  placedShips.forEach(ship =>{
    if(ship[0] === coordinates[0] && Math.abs(ship[1] - coordinates[1]) <= 1){
      isValid = false;
    }
    else if(ship[1] === coordinates[1] && Math.abs(ship[0].charCodeAt(0) - coordinates[0].charCodeAt(0)) <= 1){
      isValid = false;
    }
  })
  console.log(isValid)
  return isValid;  
}

const placedShips = [];

  if(clickProperties.source === 2){
    displayMessage("Use your own board!", "red");
    setTimeout(function(){
      displayMessage("")
    }, 1500)
  }
  else if(clickProperties.source === 1 && ourBoard.board.join("").replaceAll(",", "") < aIBoard.board.join("").replaceAll(",", "")){
    let clickCoordinates = clickProperties.x + clickProperties.y
    placeShip(boardCoordinate(clickProperties.x, clickProperties.y), ourBoard, validPlacement(placedShips, clickCoordinates));
    if(validPlacement(placedShips, clickCoordinates)) {
      placedShips.push(clickCoordinates)
    }
    console.log(placedShips);
  
  displayBoard({ boardNumber: 1, board: board });
  displayBoard({ boardNumber: 2, board: board });
}

displayBoard({
  boardNumber: 1, board:
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
});
displayBoard({
  boardNumber: 2, board:
    [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']],
});
displayMessage('message', 'green');
displayTextMessage('text message', 'red');