// Write your helper functions here!
require('isomorphic-fetch');

if (typeof window !== "undefined"){
window.addEventListener("load", function(){
    console.log("window loaded");



//commenting out while testing formSubmission function
/*const form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilot = document.querySelector("input[name=pilotName]");
      let copilot = document.querySelector("input[name=copilotName]");
      let fuel = document.querySelector("input[name=fuelLevel]");
      let cargo = document.querySelector("input[name=cargoMass]");
     

      if ((pilot.value === '')|| (copilot.value === '')||(fuel.value === '') || (cargo.value === '')) {
         alert("Please enter all information");
         event.preventDefault();
      } else if (isNaN(pilot.value) === false || isNaN(copilot.value) === false) {
         alert("Please enter valid name for Pilot Name or Co-pilot Name (or both)");
         event.preventDefault();
      } else if (isNaN(fuel.value) === true || isNaN(cargo.value) === true) {
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
*/

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const destitnation = document.getElementById("missionTarget");
    

   // Here is the HTML formatting for our mission target div.
   `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json.name} </li>
                    <li>Diameter: ${json.diameter}</li>
                    <li>Star: ${json.star}</li>
                    <li>Distance from Earth: ${json.distance} </li>
                    <li>Number of Moons: ${json.moons} </li>
                </ol>
                <img src="json.image">
   `
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
   const form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilot = document.querySelector("input[name=pilotName]");
      let copilot = document.querySelector("input[name=copilotName]");
      let fuel = document.querySelector("input[name=fuelLevel]");
      let cargo = document.querySelector("input[name=cargoMass]");
     

      if ((pilot.value === '')|| (copilot.value === '')||(fuel.value === '') || (cargo.value === '')) {
         alert("Please enter all information");
         event.preventDefault();
      } else if (isNaN(pilot.value) === false || isNaN(copilot.value) === false) {
         alert("Please enter valid name for Pilot Name or Co-pilot Name (or both)");
         event.preventDefault();
      } else if (isNaN(fuel.value) === true || isNaN(cargo.value) === true) {
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

formSubmission(document);





async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json();
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



module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

});
}
