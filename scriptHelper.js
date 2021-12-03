// Write your helper functions here!

require('isomorphic-fetch');


    function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
      this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json) {
            const div = document.getElementById("missionTarget");
            const pickedPlanet = pickPlanet();
        div.innerHTML = 
        `
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
   
    

function validateInput(testInput) {
let newValue = testInput;

    if (testInput === ""){
        newValue = ("Empty");
    } else if (!isNaN(testInput)){
      newValue = ("Is a Number");
    } else if (isNaN(testInput)){
      newValue = ("Not a Number");
    } 
    

    return newValue;
};

function formSubmission(document, list, pilot, copilot, fuel, cargo) {
       

      if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" ||validateInput(fuel.value) === "Empty" || validateInput(cargo.value) === "Empty" ) {
         alert("Please enter all information");
         
      } else if (validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number") {
         alert("Please enter valid name for Pilot Name or Co-pilot Name (or both)");
         
      } else if (validateInput(fuel.value) === "Not a Number" || validateInput(cargo.value) === "Not a Number") {
         alert("Please enter valid number for Fuel Level or Cargo Mass (or both)");
         
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
      }
};


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json()
});

    return planetsReturned;
}



function pickPlanet(planets) {
    function getRandomInt(){
        const min = Math.ceil(0);
       const max = Math.floor(6);
        return Math.floor(Math.random()* (max-min) + min);
    }
    planets = getRandomInt();
    return planets;
}





