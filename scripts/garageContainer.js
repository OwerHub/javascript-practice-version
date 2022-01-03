//import { garageIdentifier } from "./garage-identifier";

const try2 = "tryPic";

// kiszervezni, már ha a mime type nem baszódik meg

function garageIdentifier(oneGarage, garageDatas) {
  console.log(garageDatas);
  const garageIdentifierDiv = document.createElement("div");
  oneGarage.append(garageIdentifierDiv);
  garageIdentifierDiv.classList.add("garageIndentifierDiv");
  garageIdentifierDiv.style.backgroundImage = `url(../img/${try2}.jpg)`;

  const garageTextWrapper = document.createElement("div");
  garageIdentifierDiv.append(garageTextWrapper);

  const garageNameDiv = document.createElement("div");
  garageTextWrapper.append(garageNameDiv);
  garageNameDiv.classList.add("garageName");
  garageNameDiv.textContent = garageDatas.aka;

  const garageSecondText = document.createElement("div");
  garageTextWrapper.append(garageSecondText);
  garageNameDiv.classList.add("garageSecond");
  garageSecondText.textContent = garageDatas.name;

  const garageThirdText = document.createElement("div");
  garageTextWrapper.append(garageThirdText);
  garageNameDiv.classList.add("garageSecond");
  garageThirdText.textContent = garageDatas.note;
}

//---
/* function carWrapper(carDatas, oneGarage) {
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
    //carPic.src = `../img/${try2}.jpg`;
    carPic.src = "../img/tryPic.jpg";
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
} */

function carWrapper(carDatas, oneGarage, carDatas2) {
  const carsWrapper = document.createElement("div");

  oneGarage.append(carsWrapper);
  carsWrapper.classList.add("carsWrapper");
  carDatas2.forEach((element) => {
    const nameArray = element.split("-");
    //console.log(nameArray);

    const carCardHTML = `
    <div class="carContainer">
      <div class="carPicDiv">
        <img class="carPic" src="img/cars/${element}.png" alt="" />
      </div>

      <div class="carDatasWrapper">
        <div style="text-transform: capitalize">
          ${nameArray[0]}
        </div>
    
        <div style="text-transform: capitalize">
          ${nameArray[1]}
        </div>
    
        <div>
          ${nameArray[2]}
        </div>
        </div>
      </div>
    `;

    carsWrapper.insertAdjacentHTML("afterbegin", carCardHTML);
  });
}

//-------------------------------------MAIN----

function garageContainer(outerDiv, garageDatas) {
  const oneGarage = document.createElement("div");
  outerDiv.append(oneGarage);
  oneGarage.classList.add("oneGarage");

  garageIdentifier(oneGarage, garageDatas);

  const tryCarsNew = [];

  carWrapper(tryCarsNew, oneGarage, garageDatas.cars);
}

export { garageContainer };
