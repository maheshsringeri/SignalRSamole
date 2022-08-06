//Create Connection
var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hubs/userCount").build();

//Connect to methods that hub invokes aka receive notification from hub
connectionUserCount.on("updateTotalViews", (value) => {
    var newCountSpan = document.getElementById("totalViewsCounter");

    newCountSpan.innerText = value.toString();

})

connectionUserCount.on("updateTotalUsers", (value) => {

    var newUsersCountSpan = document.getElementById("totalUsersCounter");

    newUsersCountSpan.innerText = value.toString();


})


//invoke hub methods aka send notification to hub
function newWindowLoadedOnClient() {
    connectionUserCount.send("NewWindowLoaded");

    console.log("Connection to User Hub Successful");

}




//start connection

function fulfilled() {
    //do something strat
    newWindowLoadedOnClient();
}

function rejected() {
    //rejected logs
}

connectionUserCount.start().then(fulfilled, rejected);