import { data } from '/data.js';

const loadEvent = function () {

  const page = window.location.pathname.substring(1); // pathname = böngészőből az url van beírva, 
  // Write your JavaScript code after this line

  console.log("data: ", data[0].movies[0]);
  console.log("page: ", page);      // http://127.0.0.1:9000/actors vagy http://127.0.0.1:9000/movies
  console.log(window.location)


  const mainLink1 = document.createElement(`a`);
  mainLink1.innerText = "Movies"
  mainLink1.href = "/movies"

  const mainLink2 = document.createElement(`a`);
  mainLink2.innerHTML = `<br> Directors`
  mainLink2.href = "/directors"

  const mainLink3 = document.createElement(`a`);
  mainLink3.innerHTML = `<br> Writers`
  mainLink3.href = "/writers"

  const mainLink4 = document.createElement(`a`);
  mainLink4.innerHTML = `<br> Actors`
  mainLink4.href = "/actors"

  const mainLink5 = document.createElement(`a`);
  mainLink5.innerHTML = `<br> MovieID`
  mainLink5.href = `/movie/${ID}`

  //*************** Task 1 Movie Page *****************
  if (page === "movies") {

    mainLink1.innerText = ""

    const linkItem0 = document.createElement("a")
    linkItem0.textContent = "Movies:"
    linkItem0.classList.add("linkItem")
    linkItem0.href = "/"
    mainLink1.appendChild(linkItem0)

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].movies.length; j++) {
        const listItem1 = document.createElement(`li`)
        listItem1.textContent = `Title: ${data[i].movies[j].title}`
        listItem1.classList.add("Title")
        mainLink1.appendChild(listItem1)

        // directors
        let ID = 0
        for (let k = 0; k < data[i].movies[j].directors.length; k++) {
          const listItem2 = document.createElement(`li`)

          ID = data[i].movies[j].directors[k]
          if (k === 0) {
            listItem2.innerHTML = `Directors: <br> ${data[ID - 1].professionals.name}`;
          } else {
            listItem2.textContent = `${data[ID - 1].professionals.name}`
          }
          listItem2.classList.add("directors")
          mainLink1.appendChild(listItem2)
        }

        // writers
        for (let k = 0; k < data[i].movies[j].writers.length; k++) {
          const listItem3 = document.createElement(`li`)

          ID = data[i].movies[j].writers[k]
          if (k === 0) {
            listItem3.innerHTML = `Writers: <br> ${data[ID - 1].professionals.name}`;
          } else {
            listItem3.textContent = `${data[ID - 1].professionals.name}`
          }
          listItem3.classList.add("writers")
          mainLink1.appendChild(listItem3)
        }

        // actors
        for (let k = 0; k < data[i].movies[j].actors.length; k++) {
          const listItem4 = document.createElement(`li`)

          ID = data[i].movies[j].actors[k]
          if (k === 0) {
            listItem4.innerHTML = `Actors: <br> ${data[ID - 1].professionals.name}`;
          } else {
            listItem4.textContent = `${data[ID - 1].professionals.name}`
          }
          listItem4.classList.add("actors")
          mainLink1.appendChild(listItem4)
        }
      }
    }
  }
  //*************** Task 2 Directors, writers, actors of pages *****************
  let ID = 0
  let title =""
  // directors
  if (page === "directors") {
    mainLink1.innerText = ""
    mainLink2.innerText = ""
    mainLink3.innerText = ""
    mainLink4.innerText = ""

    const linkItem0 = document.createElement("a")
    linkItem0.textContent = "Directors:"
    linkItem0.classList.add("linkItem")
    linkItem0.href = "/"
    mainLink2.appendChild(linkItem0)

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].movies.length; j++) {
        // directors
        let ID = 0
        let title =""
        for (let k = 0; k < data[i].movies[j].directors.length; k++) {
          
          const listItem1 = document.createElement(`li`)
          ID = data[i].movies[j].directors[k]
          listItem1.textContent = `${data[ID - 1].professionals.name}`
          listItem1.classList.add("directors")
          mainLink2.appendChild(listItem1)

          const listItem2 = document.createElement(`li`)
          title = data[i].movies[j].title
          listItem2.textContent = `${title}`
          listItem2.classList.add("title")
          mainLink2.appendChild(listItem2)
        }
      }
    }
  }

  // writers
  if (page === "writers") {
    mainLink1.innerText = ""
    mainLink2.innerText = ""
    mainLink3.innerText = ""
    mainLink4.innerText = ""
    

    const linkItem0 = document.createElement("a")
    linkItem0.textContent = "Writers:"
    linkItem0.classList.add("linkItem")
    linkItem0.href = "/"
    mainLink3.appendChild(linkItem0)

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].movies.length; j++) {
        // writers
        let ID = 0
        for (let k = 0; k < data[i].movies[j].writers.length; k++) {

          const listItem1 = document.createElement(`li`)
          ID = data[i].movies[j].writers[k]
          listItem1.textContent = `${data[ID - 1].professionals.name}`
          listItem1.classList.add("writers")
          mainLink3.appendChild(listItem1)

          const listItem2 = document.createElement(`li`)
          title = data[i].movies[j].title
          listItem2.textContent = `${title}`
          listItem2.classList.add("title")
          mainLink3.appendChild(listItem2)
        }
      }
    }
  }

  // actors
  if (page === "actors") {
    mainLink1.innerText = ""
    mainLink2.innerText = ""
    mainLink3.innerText = ""
    mainLink4.innerText = ""

    const linkItem0 = document.createElement("a")
    linkItem0.textContent = "Actors:"
    linkItem0.classList.add("linkItem")
    linkItem0.href = "/"
    mainLink4.appendChild(linkItem0)

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].movies.length; j++) {
        // actors
        let ID = 0
        for (let k = 0; k < data[i].movies[j].actors.length; k++) {
         
          const listItem1 = document.createElement(`li`)
          ID = data[i].movies[j].actors[k]
          listItem1.textContent = `${data[ID - 1].professionals.name}`
          listItem1.classList.add("actors")
          mainLink4.appendChild(listItem1)

          const listItem2 = document.createElement(`li`)
          title = data[i].movies[j].title
          listItem2.textContent = `${title}`
          listItem2.classList.add("title")
          mainLink4.appendChild(listItem2)
        }
      }
    }
  }

  if (page === `movie/${ID}`) {
    mainLink1.innerText = ""
    mainLink2.innerText = ""
    mainLink3.innerText = ""
    mainLink4.innerText = ""

    const linkItem0 = document.createElement("a")
    linkItem0.textContent = "Actors:"
    linkItem0.classList.add("linkItem")
    linkItem0.href = "/"
    mainLink4.appendChild(linkItem0)

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].movies.length; j++) {
        // actors
        let ID = 0
        for (let k = 0; k < data[i].movies[j].actors.length; k++) {
         
          const listItem1 = document.createElement(`li`)
          ID = data[i].movies[j].actors[k]
          listItem1.textContent = `${data[ID - 1].professionals.name}`
          listItem1.classList.add("actors")
          mainLink4.appendChild(listItem1)

          const listItem2 = document.createElement(`li`)
          title = data[i].movies[j].title
          listItem2.textContent = `${title}`
          listItem2.classList.add("title")
          mainLink4.appendChild(listItem2)
        }
      }
    }
  }


  const rootElement = document.getElementById("root");

  rootElement.appendChild(mainLink1);
  rootElement.appendChild(mainLink2);
  rootElement.appendChild(mainLink3);
  rootElement.appendChild(mainLink4);
  rootElement.appendChild(mainLink5);

  //*************** Task 3 Directors, writers, actors of pages *****************



  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
