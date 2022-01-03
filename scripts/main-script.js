import { showRoomBase } from "./car-showroom.js";

const loadFunction = () => {
  const contentsContainer = document.querySelector("section");
  const navbar = document.querySelector("nav");
  //navbar Buttons
  const showRoomButton = document.querySelector("#navbar-allCars");
  const gimmeCarButton = document.querySelector("#navbar-wheel-of-cars");
  const aboutUsButton = document.querySelector("#navbar-about");

  const allNavbarButtons = Array.from(navbar.children);

  //content Divs
  const carsContentDiv = document.querySelector("#cars-content");
  const wheelContentDiv = document.querySelector("#gimme-car-content");
  const aboutContentDiv = document.querySelector("#about-us-content");

  //const allContentDiv = Array.from(document.querySelectorAll(".sectionDiv"));
  const allContentDiv = Array.from(document.querySelectorAll(".sectionDiv"));

  const startFunction = () => {
    wheelContentDiv.style.display = "none";
    aboutContentDiv.style.display = "none";
  };

  startFunction();

  const hideInactiveSections = (inComeId) => {
    allContentDiv.forEach((elementDiv) => {
      const id = elementDiv.getAttribute("id");
      if (id === inComeId) {
        elementDiv.style.display = "block";
      } else {
        elementDiv.style.display = "none";
      }
    });
  };

  const showTry = (e) => {
    let targetDivId = e.dataset.target;
    hideInactiveSections(targetDivId);

    if (targetDivId === "cars-content") {
      showRoomBase();
    }
  };

  allNavbarButtons.forEach((element) => {
    element.addEventListener("click", (e) => showTry(e.target));
  });
  showRoomBase();
  console.log("im loaded");
};

window.addEventListener("load", loadFunction);
