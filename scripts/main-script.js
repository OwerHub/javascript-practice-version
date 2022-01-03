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

  /// kiszervezni majd
  let garages = [
    {
      name: "Exeptionalist Way",
      aka: "Maradék Tároló",
      space: 10,
      note: "első garázs, ide raktam a cuccaim",
      order: 18,
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
      order: 6,
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
      space: 10,
      note: "Tuners gépek, amik nem fértek el az első garázsban, és pár másik gyors",
      order: 3,
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
      order: 5,
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
      order: 13,
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
      order: 14,
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
      order: 7,
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
      order: 1,
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
    {
      name: "Arena Workshop",
      aka: "Arena Workshop",
      space: 10,
      note: "Harci gépek az Arénába",
      order: 4,
      cars: [
        "bravardo-sasquatch-apocalypse",
        "annis-zR_380-apocalypse",
        "truffade-nero-custom",
        "weeny-issi-classic",
        "western-deathbike-apocalypse",
      ],
    },
    {
      name: "Arena Workshop B1",
      aka: "Begyűjtő",
      space: 10,
      note: "amiket nem tudtam máshova rakni",
      order: 16,
      cars: [
        "coil-brawler-",
        "albany-franken-stange",
        "grotti-brioso-300",
        "weeny-issi-classic2",
        "vapid-raid-desert",
        "gallivanter-baller-bt",
        "vapid-clique-",
      ],
    },
    {
      name: "Arena Workshop B2",
      aka: "Begyűjtő B2",
      space: 10,
      note: "amiket nem tudtam máshova rakni",
      order: 17,
      cars: [
        "overflod-autarch-",
        "ocelot-XA_21-",
        "lampadati-komoda-",
        "enus-windsor-drop",
        "dinka-verus-",
        "rUNE-cheburek-",
        "nagasaki-blazer-street",
        "dinka-veto-classic",
        "dinka-veto-modern",
      ],
    },
    {
      name: "Auto Shop Garage",
      aka: "Tuners Best Cars",
      space: 10,
      note: "Los Santos Tuners legjobb kocsijai",
      order: 2,
      cars: [
        "vapid-dominator-ASP",
        "vapid-dominator-GTT",
        "pfister-growler-",
        "vulcar-warrener-HKR",
        "karin-calico-GTF",
        "dinka-rT3000-",
        "karin-sultan-RS_Classic",
        "annis-ZR350-",
        "dinka-jester-RR",
      ],
    },
    {
      name: "Greenwich Parkway",
      aka: "Free old classics",
      space: 10,
      note: "Ingyen színes dögök",
      order: 12,
      cars: [
        "ocelot-lynx-",
        "bravardo-buffalo-sprunk",
        "declasse-stallion-Burger-Shot",
        "vapid-dominator-piswasser",
        "bravardo-gauntlet-Redwood",
        "dinka-blista-compact",
        "declasse-stallion-topless",
      ],
    },
    {
      name: "Kosatka",
      aka: "Pavel birodalma",
      space: 1,
      note: "A kostaka, ahol elfér a Torreador",
      order: 15,
      cars: ["pegassi-torreador-"],
    },
    {
      name: "Nightclub B2",
      aka: "Benny's cars",
      space: 10,
      note: "Kocsik Benny előtt és után",
      order: 10,
      cars: [
        "ocelot-swinger-",
        "bravardo-banshee-900R_topless",
        "bravardo-youga_4x4-classic",
        "vapid-peyote-",
        "annis-elegy-RH8",
      ],
    },
    {
      name: "Penthouse Garage",
      aka: "Virítós kocsik",
      space: 10,
      note: "A villogok velük kategóriák ",
      order: 9,
      cars: [
        "pegassi-zorusso-",
        "benefactor-krieger-",
        "maxwell-vagrant-",
        "benefactor-feltzer",
      ],
    },
    {
      name: "South Samble st",
      aka: "Filmes kocsik",
      space: 10,
      note: "Kocsik filmekből",
      order: 11,
      cars: ["imponte-dukes-toretto", "vapid-ellie-", "lCC-sanctus-"],
    },
    {
      name: "Agency Garage",
      aka: "Agency",
      space: 20,
      note: "Agency kocsik, és pár jobb",
      order: 8,
      cars: [
        "dewbauchee-champion-",
        "mamomoth-patriot-Mil_spec",
        "declasse-mamba-",
        "ocelot-ardent-",
      ],
    },
  ];

  /// adatok vége

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

    if (targetDivId === "gimme-car-content") {
      gimmecarFunct(garages);
    }

    if (targetDivId === "cars-content") {
      showRoomBase(garages);
    }
  };

  allNavbarButtons.forEach((element) => {
    element.addEventListener("click", (e) => showTry(e.target));
  });
  showRoomBase(garages);
  console.log("im loaded");

  // gimmecar, de nem akarok a modulokkal szenvedni

  const gimmecarFunct = (garages) => {
    const gimmeCarCont = document.querySelector("#gimmeCarContainer");
    const gimmeButton = gimmeCarCont.querySelector(".button");

    const randomCar = () => {
      let allCars = [];

      if (document.querySelector(".randomCarWrapper")) {
        console.log("van");
        document.querySelector(".randomCarWrapper").remove();
      }

      garages.forEach((element) => {
        element.cars.forEach((car) => {
          allCars.push(car);
        });
      });
      const random = Math.floor(Math.random() * allCars.length - 1);
      console.log(allCars[random]);

      const randomCarWrapper = document.createElement("div");
      randomCarWrapper.classList.add("randomCarWrapper");
      gimmeCarCont.append(randomCarWrapper);

      //behívjuk a képet
      const randomCarImage = document.createElement("img");
      randomCarImage.src = `img/cars/${allCars[random]}.png`;
      randomCarImage.classList = "randomCarImage";
      gimmeCarCont.append(randomCarImage);
      // hozzáadjuk a nevet
      const randomCarName = document.createElement("h3");
      randomCarName.textContent = ` ${allCars[random].split("-")[1]}  ${
        allCars[random].split("-")[2]
      }`;
      randomCarName.style.textTransform = "capitalize";
      gimmeCarCont.append(randomCarName);
    };

    gimmeButton.addEventListener("click", randomCar);
  };
};

window.addEventListener("load", loadFunction);
