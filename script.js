// Write your JavaScript code here!




window.addEventListener("load", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
      const pilot = document.querySelector("input[name=pilotName]");
      const copilot = document.querySelector("input[name=copilotName]");
      const fuel = document.querySelector("input[name=fuelLevel]");
      const cargo = document.querySelector("input[name=cargoMass]");
      const list = document.getElementById("faultyItems");
      

    formSubmission(document,list,pilot,copilot,fuel,cargo);
    
   
});
let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       const pickedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, pickedPlanet);
        
       })
});