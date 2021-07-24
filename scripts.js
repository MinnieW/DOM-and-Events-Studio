// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const takeOff = document.getElementById("takeoff");
    const land = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");
    const leftBtn = document.getElementById("navLeft");
    const rightBtn = document.getElementById("navRight");
    const upBtn = document.getElementById("navUp");
    const downBtn = document.getElementById("navDown");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocketIMG = document.getElementById("rocket");

    takeOff.addEventListener('click', event=> {
        let response = confirm('Confirm that the shuttle is ready for takeoff');

        if(response){
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight."
            document.getElementById("shuttleBackground").style.backgroundColor = 'blue'
            shuttleHeight.innerHTML = 10000 + Number(shuttleHeight.innerHTML)
        }
    })

    land.addEventListener('click', event=> {
        alert('The shuttle is landing. Landing gear engaged.')
        document.getElementById("flightStatus").innerHTML = "Shuttle has landed."
        document.getElementById("shuttleBackground").style.backgroundColor = 'green'
        document.getElementById("spaceShuttleHeight").innerHTML = 0
    })

    abort.addEventListener('click', event=> {
        let abortResponse = confirm('Confirm that you want to abort the mission.');

        if(abortResponse){
            document.getElementById("flightStatus").innerHTML = "Mission aborted."
            document.getElementById("shuttleBackground").style.backgroundColor = 'green'
            document.getElementById("spaceShuttleHeight").innerHTML = 0
        }
    })

    // leftBtn.addEventListener('click', event=>{
    //     rocketIMG.style.marginRight = "10px"
    // })

    // rightBtn.addEventListener('click', event=>{
        
    // })

    // upBtn.addEventListener('click', event=>{
        
    // })

    // downBtn.addEventListener('click', event=>{
    //     const currentHeight = Number(shuttleHeight.innerHTML)
    //     if(currentHeight >= 0){
    //         shuttleHeight.innerHTML = currentHeight - 10000
    //     }
    // })
    let marginLeft = 0;
    let marginTop = 0;
    upBtn.addEventListener("click", function (event) {
        const currentHeight = Number(shuttleHeight.innerHTML);
        shuttleHeight.innerHTML = currentHeight + 10000;
        rocketIMG.style.position = "relative";
        marginTop -= 10;
        rocketIMG.style.marginTop = `${marginTop}px`;
    });
    downBtn.addEventListener("click", function (event) {
        const currentHeight = Number(shuttleHeight.innerHTML);
        if (currentHeight > 0){
            shuttleHeight.innerHTML = currentHeight - 10000;
        }
        rocketIMG.style.position = "relative";
        marginTop += 10;
        rocketIMG.style.marginTop = `${marginTop}px`;
    });
    leftBtn.addEventListener("click", function (event) {
        marginLeft -= 10;
        rocketIMG.style.marginLeft = `${marginLeft}px`;
    });
    rightBtn.addEventListener("click", function (event) {
        marginLeft += 10;
        rocketIMG.style.marginLeft = `${marginLeft}px`;
    });
}

window.addEventListener("load", init);