import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';
import { toExport as preData } from '/data.js';
import {render, postError, pImp} from '/public/jet.js';


// TODO: use dynamic import for better debugger responses
const loadModule = async () => {

  try {
    return await import(modulePath)
  } catch (e) {
    // send a POST message to the server in case of
    console.dir(e);
  }
}

const addAndStore = (parent, element, where, selector) => {
  parent.insertAdjacentHTML(where, element);
  return parent.querySelector(selector);
}


const loadEvent = async _ => {

  const ROOT = document.getElementById("root");

  const data = pImp(preData);
  console.log(data);

  const membersRender = data.ourTeam.members.map((e,i) => render(e, `swiper-slide student-slide student-${i}`)).join("");

  try {
    const MAIN = addAndStore(ROOT, `
      <main class="swiper">
        <div class="swiper-wrapper">
          ${ render({title: "Here comes the amazing and unrepeatable", "team": data.ourTeam.name, "end": "team"}, "swiper-slide welcome") }
          ${ membersRender }
          ${ render({title: "Average Age", score: data.averageAge}, "swiper-slide average-age") }
          ${ render({title: "Average Coding Level", score: data.averageCodingLevel}, "swiper-slide average-cl") }
          ${ render({title: "Youngest Team Member", score: data.youngestMember}, "swiper-slide youngest") }
          ${ render({title: "Oldest Team Member", score: data.oldestMember}, "swiper-slide oldest") }
          ${ render({title: "Locations", score: data.location}, "swiper-slide common-location") }
          ${ render({title: "Genres", score: data.commonGenres}, "swiper-slide common-genres") }
          ${ data.ourTeam.moreStats ? render({title: "More Statistics", score: data.ourTeam.moreStats}, "swiper-slide more-stats") : "" }
          ${ render("Thank you!", "swiper-slide welcome") }
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </main>
    `, "beforeend", "main");



    document.getElementById("prestyle").innerHTML = data.ourTeam.members.map((e,i) => `
    .student-${i}{
      --primary: rgb(${e.colors.primary.red},${e.colors.primary.green},${e.colors.primary.blue});
      --secondary: rgb(${e.colors.secondary.red},${e.colors.secondary.green},${e.colors.secondary.blue})
    }
    .student-${i}::before{
      background-image: url("/public/images/${i}.jpg");
    }
  `).join("");


    const swiper = new Swiper(MAIN, {
      loop: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    const clickEvent = ({target}) => {
      if(target.classList.contains("review")){
        target.classList.toggle("open")
      }
    }
    window.addEventListener("click", clickEvent);
  } catch (error) {
    console.log(error.message);
    postError(`\n\nSomething is not good with your variables, please try to fix it then refresh the page in the browser.\n\n`)
  }
}

window.addEventListener("load", loadEvent);
