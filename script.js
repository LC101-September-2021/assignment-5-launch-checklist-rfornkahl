// Write your JavaScript code here!


const addDestinationInfo = require('./scriptHelper.js');
const pickPlanet = require('./scriptHelper.js'); 
const myFetch = require('./scriptHelper.js');
const formSubmission = require('./scriptHelper.js');

window.addEventListener("load", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {

      let pilot = document.querySelector("input[name=pilotName]");
      let copilot = document.querySelector("input[name=copilotName]");
      let fuel = document.querySelector("input[name=fuelLevel]");
      let cargo = document.querySelector("input[name=cargoMass]");

    formSubmission(document);
    event.preventDefault();

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pickedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document);
       })
   
});
});