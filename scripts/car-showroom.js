const topDiv = document.querySelector("#cars-content");
const try2 = "tryPic";

function showRoomBase() {
  // befoglaló Div
  const outerDiv = document.createElement("div");
  topDiv.append(outerDiv);
  outerDiv.classList.add("fullSizeTry");

  // egy garázscsík, autók + garázsok
  const oneGarage = document.createElement("div");
  outerDiv.append(oneGarage);
  oneGarage.classList.add("oneGarage");
  //oneGarage.textContent = " garage";

  // garázsazonosító div hozzáadása
  const garageIdentifierDiv = document.createElement("div");
  oneGarage.append(garageIdentifierDiv);
  garageIdentifierDiv.classList.add("garageIndentifierDiv");
  garageIdentifierDiv.style.backgroundImage = `url(../img/${try2}.jpg)`;

  //textwrapper
  const garageTextWrapper = document.createElement("div");
  garageIdentifierDiv.append(garageTextWrapper);

  // felső név
  const garageNameDiv = document.createElement("div");
  garageTextWrapper.append(garageNameDiv);
  garageNameDiv.classList.add("garageName");
  garageNameDiv.textContent = "Garázsnév";

  //
  const garageSecondText = document.createElement("div");
  garageTextWrapper.append(garageSecondText);
  garageNameDiv.classList.add("garageSecond");
  garageSecondText.textContent = "Second";
}

export { showRoomBase };
