// Write your helper functions here!
require('isomorphic-fetch');

window.addEventListener("load", function(){
    console.log("window loaded");


const form = document.querySelector("form");

form.addEventListener('submit', function(event) {
const pilot = document.querySelector("input[name=pilotName]");
const coPilot = document.querySelector("input[name=copilotName]");
const fuel = document.querySelector("input[name=fuelLevel]");
const cargo = document.querySelector("input[name=cargoMass]");



    if ((pilot.value === "") || (coPilot.value === "") || (fuel.value === "") || (cargo.value === "")){
        alert("All fields are required!");
        event.preventDefault();
    } else if ((isNaN(pilot.value) === false) || (isNaN(coPilot.value) === false)){
        alert("Make sure to enter valid information for each field!");
        event.preventDefault();
    } else if ((isNaN(fuel.value) === true) || (isNaN(cargo.value) === true)) {
        alert("Make sure to enter valid information for each field!");
        event.preventDefault();
    }
});

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
    } else if (isNaN(testInput)){
        testInput = ("Not a Number");
    } else if (!isNaN(testInput)){
        testInput = ("Is a Number");
    };

    return testInput;
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
});
