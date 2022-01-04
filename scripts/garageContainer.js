//import { garageIdentifier } from "./garage-identifier";

const try2 = "tryPic";

// kiszervezni, már ha a mime type nem baszódik meg
// garage azonosítója,
function garageIdentifier(oneGarage, garageDatas) {
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

// ---- carsWrapper, ide renderelem ki a kocsikat

function carWrapper(carDatas, oneGarage, carDatas2) {
  const carsWrapper = document.createElement("div");

  oneGarage.append(carsWrapper);
  carsWrapper.classList.add("carsWrapper");
  const fragment = new DocumentFragment();

  const infragment = document.createElement("div");
  carDatas2.forEach((element) => {
    const nameArray = element.split("-");
    //console.log(nameArray);

    infragment.classList.add("infragment");
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

    infragment.insertAdjacentHTML("afterbegin", carCardHTML);
    fragment.append(infragment);
  });

  carsWrapper.append(fragment);
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
