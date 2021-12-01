// Write your JavaScript code here!
import {createRequire} from 'module';

const { formSubmission, myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

    formSubmission();
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = fetch("https://handlers.education.launchcode.org/static/planets.json");
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.+
       
       let pickedPlanet = pickPlanet(listedPlanets);
   addDestinationInfo(pickedPlanet);
    })
   
});