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
    {
      name: "Arena Workshop",
      aka: "Arena Workshop",
      space: 10,
      note: "Harci gépek az Arénába",
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
      cars: ["pegassi-torreador-"],
    },
    {
      name: "Nightclub B2",
      aka: "Benny's cars",
      space: 10,
      note: "Kocsik Benny előtt és után",
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
      cars: ["imponte-dukes-toretto", "vapid-ellie-", "lCC-sanctus-"],
    },
    {
      name: "Agency Garage",
      aka: "Agency",
      space: 20,
      note: "Agency kocsik, és pár jobb",
      cars: [
        "dewbauchee-champion-",
        "mamomoth-patriot-Mil_spec",
        "declasse-mamba-",
        "ocelot-ardent-",
      ],
    },
  ];
  garages.forEach((garageDatas) => {
    garageContainer(outerDiv, garageDatas);
  });
}

export { showRoomBase };
