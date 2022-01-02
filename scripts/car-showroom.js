const topDiv = document.querySelector("#cars-content");
const try2 = "tryPic";
//import { garageContainer } from "./garageContainer";

function showRoomBase() {
  // befoglaló Div
  const outerDiv = document.createElement("div");
  topDiv.append(outerDiv);
  outerDiv.classList.add("fullSizeTry");

  /// ------------ GARAGECONTAINER
  function garageContainer() {
    const oneGarage = document.createElement("div");
    outerDiv.append(oneGarage);
    oneGarage.classList.add("oneGarage");
    //oneGarage.textContent = " garage";

    function garageIdentifier() {
      const garageIdentifierDiv = document.createElement("div");
      oneGarage.append(garageIdentifierDiv);
      garageIdentifierDiv.classList.add("garageIndentifierDiv");
      garageIdentifierDiv.style.backgroundImage = `url(../img/${try2}.jpg)`;

      const garageTextWrapper = document.createElement("div");
      garageIdentifierDiv.append(garageTextWrapper);

      const garageNameDiv = document.createElement("div");
      garageTextWrapper.append(garageNameDiv);
      garageNameDiv.classList.add("garageName");
      garageNameDiv.textContent = "Garázsnév";

      const garageSecondText = document.createElement("div");
      garageTextWrapper.append(garageSecondText);
      garageNameDiv.classList.add("garageSecond");
      garageSecondText.textContent = "Second";
    }

    garageIdentifier();

    function carWrapper() {
      const carsWrapper = document.createElement("div");
      oneGarage.append(carsWrapper);
      carsWrapper.classList.add("carsWrapper");

      const tryArray = [
        "első",
        "második",
        "harmadik",
        "negyedik",
        "ötödik",
        "hatodik",
        "hetedik",
        "nyolcadik",
        "kilencedik",
        "tizedik",
      ];

      tryArray.forEach((element) => {
        const carContainer = document.createElement("div");
        carsWrapper.append(carContainer);
        carContainer.classList.add("carContainer");

        const carPicDiv = document.createElement("img");
        carContainer.append(carPicDiv);
        carPicDiv.src = `../img/${try2}.jpg`;
        carPicDiv.classList.add("carPicDiv");

        const carDatasWrapper = document.createElement("div");
        carContainer.append(carDatasWrapper);
        carDatasWrapper.textContent = "text";
        carDatasWrapper.classList.add("carDatasWrapper");
      });
    }

    carWrapper();
  }

  //
  garageContainer();
}

export { showRoomBase };
