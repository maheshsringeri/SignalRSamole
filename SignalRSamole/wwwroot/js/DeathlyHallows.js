var cloakSpan = document.getElementById("cloakCounter");
var stoneSpan = document.getElementById("stoneCounter");
var wandSpan = document.getElementById("wandCounter");


//Create Connection
var connectionDeathlyHallows = new signalR.HubConnectionBuilder().withUrl("/hubs/DeathlyHallows").build();


//Connect to methods that hub invokes aka receive notification from hub
connectionDeathlyHallows.on("updateDeathlyHallowCount", (cloak, stone, wand) => {

    cloakSpan.innerText = cloak.toString();
    stoneSpan.innerText = stone.toString();
    wandSpan.innerText = wand.toString();

});


//start connection

function fulfilled() {
    //do something strat
    connectionDeathlyHallows.invoke("GetRaceStatus").then((raceCounter) => {
        cloakSpan.innerText = raceCounter.cloak.toString();
        stoneSpan.innerText = raceCounter.stone.toString();
        wandSpan.innerText = raceCounter.wand.toString();
    });
}

function rejected() {
    //rejected logs
}

connectionDeathlyHallows.start().then(fulfilled, rejected);