// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const takeOff = document.getElementById("takeoff");

    takeOff.addEventListener('click', event=> {
        let response = confirm('Confirm that the shuttle is ready for takeoff');

        if(response){
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight."
            document.getElementById("shuttleBackground").style.backgroundColor = 'blue'
            document.getElementById("spaceShuttleHeight").innerHTML = 10000 + Number(document.getElementById("spaceShuttleHeight").innerHTML)
            
        }
    })
}

window.addEventListener("load", init);