


var firstNames = ["Áfonyás grilled cheese szendvics",
"Alap tojáskrém",
"Angol reggeli",
"Babkrémes-sonkás-sajtos gofri",
"Babos-kolbász pirítós",
"Baconos röszti rántottával",
"Bundáskenyér",
"Bundáskenyér szendvics",
"Buggyantott tojás pirítóssal",
"Csirkés szendvics",
"egg-mayo sandwich",
"felvágottas kenyér",
"Fokhagymás vajas pirítós",
"Főtt Virsli",
"Gombás melegszendvicskrém",
"Grilled-Cheese Sandwich",
"Gyors amerikai palacsinta",
"Hagymás rántotta",
"Hagymás-bab",
"Hal-konzerv",
"Japán Palacsinta",
"Konzerv melegszendvicskrém",
"Lekváros-kenyér",
"Lilahagymás tojáskrém",
"löncshús",
"Melegszendvics",
"Muffuletta",
"Omlett",
"Parasztreggeli",
"Pesztós-Pulykás grillszendvics",
"Rántotta",
"Sajtos Omlett",
"Sonkás-sajtos bagett",
"Sonkás-Tojás",
"Spanish omlette sandwich style",
"sült szalonna",
"Sült Virsli",
"Szalonnás hagymás rántotta",
"Tejbe-gríz",
"Tejbe-rizs",
"Tepertőkrém",
"tonhal-sali",
"Tuna & Quinoa Patties",
"Tuna-Fasírt",
"Tuna-Sandwich",
"Tükörtojás",
"Vajas-mézes kenyér",
"Zabpehely (corn flakes)",
"zsíros kenyér",
"zsíros pirítós hagymával",
];


var getRandomNumber = (max) => Math.floor(Math.random() * max);

var getRandomName = () => 
  `${firstNames[getRandomNumber(firstNames.length)]}`;
  

var setRandomName = () => {
  document.getElementById("random-name").innerText = getRandomName();
}


setRandomName();
