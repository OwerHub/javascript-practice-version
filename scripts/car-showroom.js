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

  // átmeneti adat, nem tudja beolvasni valamiért a JSON-t
  let garages = [
    {
      name: "Exeptionalist Way",
      aka: "Maradék Tároló",
      space: 10,
      note: "első garázs, ide raktam a cuccaim",
      cars: [
        "bF-raptor-",
        "bravardo-gauntlet-",
        "enus-huntley-S",
        "enus-vindsor-",
        "grotti-turismo-R",
        "obey-omnis-",
        "vapid-sandking-XL",
        "uberMact-sCI-",
      ],
    },
    {
      name: "3 Alta St, Apt 57",
      aka: "Akciógépek",
      space: 99,
      note: "Mission-okre ideális gépek",
      cars: [
        "declasse-scramjet-",
        "enus-paragon-Armored",
        "hVY-nightshark-",
        "imponte-deluxo-",
        "pegassi-opressor-MK1",
        "karin-kuruma-Armored",
      ],
    },
    {
      name: "Del Perro Hts, 7",
      aka: "Fast And etc, 2",
      space: 99,
      note: "Tuners gépek, amik nem fértek el az első garázsban, és pár másik gyors",
      cars: [
        "karin-previon-",
        "obey-tailgater-S",
        "annis-remus-",
        "pegassi-zentorno-",
        "ubermacht-cypher-",
        "karin-futo-GTX",
        "emperor-vectre-",
      ],
    },
    {
      name: "331 Supply Street",
      aka: "American Muscle Cars",
      space: 10,
      note: "Az összes kiemelet motoros, állat cuccom",
      cars: [
        "schyster-deviant-",
        "vapid-hotknife-",
        "imponte-duke-oDeath-",
        "bravardo-gauntlet-Classic_Custom",
        "imponte-phoenix-",
        "declasse-tulip-",
        "imponte-dukes-beater",
        "peyote-gasser-topless",
      ],
    },
    {
      name: "Great Chaparal Clubhouse",
      aka: "Motoros Klub",
      space: 99,
      note: "Csak motoroknak, javítóműhellyel",
      cars: [
        "dinka-akuma-",
        "pegassi-vortex-",
        "western-zombie_Chopper-",
        "western-rat_Bike-",
        "western-soverign-",
      ],
    },
    {
      name: "870 Route 68",
      aka: "Motoros Klub plusz ",
      space: 99,
      note: "Ami nem fért el a motorklubban",
      cars: [
        "maibatsu-manchez-scout",
        "shitzu-hakuchou-",
        "pegassi-bati_810-RR",
        "nagasaki-hot_Rod-Blazer",
      ],
    },
    {
      name: "Route 68 Facility",
      aka: "Katonai gépek",
      space: 10,
      note: "Amin fegyver van",
      cars: [
        "bF-dune-fav",
        "rUNE-zhaba-",
        "bravardo-half_track",
        "hVY-menacer-",
        "hVY-insurgen_pickup-Custom",
        "declasse-tampa-Weaponized",
        "hVY-chernobog-",
      ],
    },
    {
      name: "Arcade",
      aka: "Arcade válogatás",
      space: 10,
      note: "csak a legjobbak",
      cars: [
        "pegassi-torero-",
        "lapmadati-viseris-",
        "pegassi-opressor-MKII",
        "bF-weevil-",
        "invetero-croquette-classic_topless",
        "nagasaki-shotaro-",
        "lampadati-tropos-Rallye",
        "declasse-yosemite-drift",
        "declasse-sabre-hotring",
      ],
    },
  ];
  garages.forEach((garageDatas) => {
    garageContainer(outerDiv, garageDatas);
  });
}

export { showRoomBase };
