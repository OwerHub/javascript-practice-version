function garageIdentifier(oneGarage) {
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

export { garageIdentifier };
