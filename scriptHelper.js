// Write your helper functions here!

require('isomorphic-fetch');

if (typeof window !== "undefined"){
window.addEventListener("load", function(){
    console.log("window loaded");



    function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
      // Here is the HTML formatting for our mission target div.
      /*
                   <h2>Mission Destination</h2>
                   <ol>
                       <li>Name: </li>
                       <li>Diameter: </li>
                       <li>Star: ${star}</li>
                       <li>Distance from Earth: </li>
                       <li>Number of Moons: </li>
                   </ol>
                   <img src="">
      */
   }
   



    

function validateInput(testInput) {

    if (testInput === ""){
        testInput = ("Empty");
    } else if (!isNaN(testInput)){
      testInput = ("Is a Number");
    } else if (isNaN(testInput)){
        testInput = ("Not a Number");
    } 
    

    return testInput;
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   const form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilot = document.querySelector("input[name=pilotName]");
      let copilot = document.querySelector("input[name=copilotName]");
      let fuel = document.querySelector("input[name=fuelLevel]");
      let cargo = document.querySelector("input[name=cargoMass]");
     

      if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" ||validateInput(fuel.value) === "Empty" || validateInput(cargo.value) === "Empty" ) {
         alert("Please enter all information");
         event.preventDefault();
      } else if (validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number") {
         alert("Please enter valid name for Pilot Name or Co-pilot Name (or both)");
         event.preventDefault();
      } else if (validateInput(fuel.value) === "Not a Number" || validateInput(cargo.value) === "Not a Number") {
         alert("Please enter valid number for Fuel Level or Cargo Mass (or both)");
         event.preventDefault();
      } else {
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is Ready`;
         document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilot.value} is Ready`;
         if (fuel.value <= 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
         } else {
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
         }
         if (cargo.value >= 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
         } else {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
         }
         if (cargo.value <= 10000 && fuel.value >= 10000) {
            document.getElementById("launchStatus").innerHTML = "Shuttle Ready for Launch";
            document.getElementById("launchStatus").style.color = "green";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            document.getElementById("faultyItems").style.visibility = "hidden";
         }
         event.preventDefault();
      }
   });
   
};


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json()
});

    return planetsReturned;
}



function pickPlanet(planets) {
    function getRandomInt(min, max){
        min = Math.ceil(0);
        max = Math.floor(6);
        return Math.floor(Math.random()* (max-min) + min);
    }
    planets = getRandomInt();
    return planets;
}


/*Entered the code for script.js in scriptHelper.js, browser keeps erroring out on the messages: 
Uncaught ReferenceError: require is not defined. script.js
Uncaught ReferenceError: module is not defined. ScriptHelper.js
if the section below is uncommited and the script.js is commited application works properly. unable to figure out why 
require and module are not read properly. have switched ES6 with export and import, code still errors out except the error
message received is that unexpected token of export and import cannot be used outside of module.

   formSubmission(document);

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch("https://handlers.education.launchcode.org/static/planets.json");
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let pickedPlanet = pickPlanet(listedPlanets);

      function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl){
         this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[pickedPlanet].name}</li>
            <li>Diameter: ${json[pickedPlanet].diameter}</li>
            <li>Star: ${json[pickedPlanet].star}</li>
            <li>Distance from Earth: ${json[pickedPlanet].distance}</li>
            <li>Number of Moons: ${json[pickedPlanet].moons}</li>
         </ol>
         <img src="${json[pickedPlanet].image}">
         `; 
      });
   });
      };
       addDestinationInfo(document);
      })
      
  */




module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

});
}
