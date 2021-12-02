// Write your JavaScript code here!


const addDestinationInfo = require('./scriptHelper.js');
const pickPlanet = require('./scriptHelper.js'); 
const myFetch = require('./scriptHelper.js');
const formSubmission = require('./scriptHelper.js');

window.addEventListener("load", function() {

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
   
});
