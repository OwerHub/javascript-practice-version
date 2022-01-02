import { tryFunction } from "./tryFunct.js";
import { garageContainer } from "./garageContainer.js";
const topDiv = document.querySelector("#cars-content");
const try2 = "tryPic";

//  ------ service Function

/// ---- DOM

function showRoomBase() {
  // befoglaló Div
  const outerDiv = document.createElement("div");
  topDiv.append(outerDiv);
  outerDiv.classList.add("fullSizeTry");

  /// ------------ GARAGECONTAINER
  /*   function garageContainer() {
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

    const tryCars = [
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

    const tryCarsNew = [
      { datas: ["ford", "escort", "crossworth"] },
      { datas: ["ford", "escort", "crossworth"] },
      { datas: ["ford", "escort", "crossworth"] },
      { datas: ["ford", "escort", "hukk"] },
      { datas: ["ford", "escort", "crossworth"] },
      { datas: ["ford", "escort", ""] },
      { datas: ["ford", "", "crossworth"] },
      { datas: ["ford", "escort", "crossworth"] },
      { datas: ["ford", "escort", "crossworth"] },
      { datas: ["ford", "escort", "crossworth"] },
    ];

    function carWrapper(carDatas) {
      const carsWrapper = document.createElement("div");
      oneGarage.append(carsWrapper);
      carsWrapper.classList.add("carsWrapper");

      carDatas.forEach((element) => {
        const carContainer = document.createElement("div");
        carsWrapper.append(carContainer);
        carContainer.classList.add("carContainer");

        const carPicDiv = document.createElement("div");
        carContainer.append(carPicDiv);
        carPicDiv.classList.add("carPicDiv");

        const carPic = document.createElement("img");
        carPicDiv.append(carPic);
        carPic.classList.add("carPic");
        carPic.src = `../img/${try2}.jpg`;

        const carDatasWrapper = document.createElement("div");
        carContainer.append(carDatasWrapper);
        carDatasWrapper.classList.add("carDatasWrapper");

        const dataTryArray = ["ford", "escort"];
        const dataNamesArray = ["gyártó", "típus", "változat"];

        console.log(element.datas);
        function createCarDatas(dataNames, dataValues) {
          for (let index = 0; index < dataNames.length; index++) {
            let currentDataValue;
            if (!dataValues[index]) {
              currentDataValue = "n.a";
            } else {
              currentDataValue = dataValues[index];
            }
            const carData = document.createElement("div");
            carDatasWrapper.append(carData);
            carData.classList.add("carData");
            carData.innerHTML = `<span>${dataNames[index]} :</span> <span>${currentDataValue}</span>`;
          }
        }

        createCarDatas(dataNamesArray, element.datas);
        //carDatasWrapper.classList.add("carDatasWrapper");
      });
    }

    carWrapper(tryCarsNew);
  } */

  //
  garageContainer(outerDiv);
}

export { showRoomBase };
