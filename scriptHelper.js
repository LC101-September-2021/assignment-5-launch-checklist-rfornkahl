// Write your helper functions here!
require('isomorphic-fetch');

if (typeof window !== "undefined"){
window.addEventListener("load", function(){
    console.log("window loaded");


const form = document.querySelector("form");

form.addEventListener('submit', function(event) {
const pilot = document.querySelector("input[name=pilotName]");
const coPilot = document.querySelector("input[name=copilotName]");
const fuel = document.querySelector("input[name=fuelLevel]");
const cargo = document.querySelector("input[name=cargoMass]");
const pilotStatusDisplay = document.getElementById("pilotStatus");
const coPilotStatusDisplay = document.getElementById("copilotStatus");






    if ((pilot.value === "") || (coPilot.value === "") || (fuel.value === "") || (cargo.value === "")){
        alert("All fields are required!");
        event.preventDefault();
    } else if ((isNaN(pilot.value) === false) || (isNaN(coPilot.value) === false)){
        alert("Make sure to enter valid information for each field!");
        event.preventDefault();
    } else if ((isNaN(fuel.value) === true) || (isNaN(cargo.value) === true)) {
        alert("Make sure to enter valid information for each field!");
        event.preventDefault();
    } /*else{
        document.getElementById("faultyItems").style.visibility="visible";
        pilotStatusDisplay.innerHTML=`Pilot ${pilot.value} is ready for launch`;
        coPilotStatusDisplay.innerHTML=`Co-Pilot ${coPilot.value} is ready for launch`;
        event.preventDefault();
    } */

});

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const destitnation = document.getElementById("missionTarget");
    

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
    } else if (isNaN(testInput)){
        testInput = ("Not a Number");
    } else if (!isNaN(testInput)){
        testInput = ("Is a Number");
    };

    return testInput;
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    form.addEventListener('submit', function(event){

   
    /* if (fuel.value <= 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
     } else {
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
     }
     if (cargoMassInput.value >= 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
     } else {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
     }
     if (cargoMassInput.value <= 10000 && fuelLevelInput.value >= 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle Ready for Launch";
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        document.getElementById("faultyItems").style.visibility = "hidden";
     }
     event.preventDefault();
  }*/
    });
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json();
});

    return planetsReturned;
}

function getRandomInt(min, max){
    min = Math.ceil(0);
    max = Math.floor(6);
    return Math.floor(Math.random()* (max-min) + min);
}

function pickPlanet(planets) {
    planets = getRandomInt();
    return planets;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
});
}
