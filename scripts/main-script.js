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

  const showRoomShow = () => {
    showRoomBase();
    hideInactiveSections("cars-content");
  };

  const showTry = () => {
    console.log("e is ");
  };

  console.log(wheelContentDiv);

  wheelContentDiv.addEventListener("click", showRoomShow);
  showRoomButton.addEventListener("click", showRoomShow);

  console.log("im loaded");
};

window.addEventListener("load", loadFunction);
