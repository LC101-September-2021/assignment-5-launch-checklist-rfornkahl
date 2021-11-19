// Write your helper functions here!
require('isomorphic-fetch');

//window.addEventListener("load", function(){
    //console.log("window loaded");


const form = document.getElementById("launchForm");
const pilot = document.getElementById("pilotName");
const coPilot = document.getElementsByName("copilotName");
const fuel = document.getElementsByName("fuelLevel");
const cargo = document.getElementsByName("cargoMass");

const pilotValue = pilot.value;
    const coPilotValue = coPilot.value;
    const fuelValue = fuel.value;
    const cargoValue = cargo.value;

    const nonLetters = new RegExp (/[~`!@#$%\^()_&*+=\-\[\]\\';,/{}|\\":<>\?0-9]/);
    const nonNumbers = new RegExp (/[~`!@#$%\^()_&*+=\-\[\]\\';,/{}|\\":<>\?a-zA-Z]/);

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

form.addEventListener('submit', function(event) {
    
  

    if (pilotValue === "" || coPilotValue === "" || fuelValue === "" || cargoValue === ""){
        alert("All fields are required!");
    } if (nonLetters.test(pilotValue) || nonLetters.test(pilotValue)){
        alert("Make sure to enter valid information for each field!");
    } if (nonNumbers.test(fuelValue) || nonNumbers.test(cargoValue)){
        alert("Make sure to enter valid information for each field!");
    }

    event.preventDefault();
});

function validateInput(testInput) {
    testInput = form.value;

    if (testInput === ""){
        inputValue = ("Empty")
    }; if (isNaN(testInput)){
    inputValue = console.log("Is a Number")
    }; if (!isNaN(testInput)){
    inputValue = console.log("Not a Number")
    };
return inputValue;
}


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
//});
