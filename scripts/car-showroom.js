import { garageContainer } from "./garageContainer.js";
const topDiv = document.querySelector("#cars-content");
const try2 = "tryPic";

//  ------ service Function

/// ---- DOM

function showRoomBase(garages) {
  // befoglaló Div
  const outerDiv = document.createElement("div");
  topDiv.append(outerDiv);
  outerDiv.classList.add("fullSizeTry");

  garages.sort((a, b) => (a.order > b.order ? 1 : -1));

  let listHtml = `
  <div id="listOfSelectedCars">
  </div>
  `;

  outerDiv.insertAdjacentHTML("afterbegin", listHtml);

  garages.forEach((garageDatas) => {
    garageContainer(outerDiv, garageDatas);
  });

  // autószámláló

  function countCar() {
    let count = 0;
    garages.forEach((garage) => {
      count = count + garage.cars.length;
    });
    console.log(count);
  }

  countCar();
}

export { showRoomBase };
