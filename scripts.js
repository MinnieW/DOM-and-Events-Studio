// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const takeOff = document.getElementById("takeoff");
    const land = document.getElementById("landing");

    takeOff.addEventListener('click', event=> {
        let response = confirm('Confirm that the shuttle is ready for takeoff');

        if(response){
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight."
            document.getElementById("shuttleBackground").style.backgroundColor = 'blue'
            document.getElementById("spaceShuttleHeight").innerHTML = 10000 + Number(document.getElementById("spaceShuttleHeight").innerHTML)
        }
    })

    land.addEventListener('click', event=> {
        alert('The shuttle is landing. Landing gear engaged.')
        document.getElementById("flightStatus").innerHTML = "Shuttle has landed."
        document.getElementById("shuttleBackground").style.backgroundColor = 'green'
        document.getElementById("spaceShuttleHeight").innerHTML = 0
    })
}

window.addEventListener("load", init);