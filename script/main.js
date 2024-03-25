
function setLightMode() {
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    document.body.style.color = "rgb(0, 0, 0)";
    document.getElementById("Resume").style.color = "rgb(0, 0, 0)";
    document.getElementById("Projects").style.color = "rgb(0, 0, 0)";
    document.getElementById("Interests").style.color = "rgb(0, 0, 0)";
    document.getElementById("toggleButton").innerHTML = "On";
}

function setDarkMode() {
    document.body.style.backgroundColor = "rgb(0, 0, 0)";
    document.body.style.color = "rgb(255, 255, 255)";
    document.getElementById("Resume").style.color = "rgb(255, 255, 255)";
    document.getElementById("Projects").style.color = "rgb(255, 255, 255)";
    document.getElementById("Interests").style.color = "rgb(255, 255, 255)";
    document.getElementById("toggleButton").innerHTML = "On";
}


function myFunction() {
    document.getElementById("textsizechange").style.fontSize = "x-large";
  }
function Original() {
    document.getElementById("textsizechange").style.fontSize = "15px";
}