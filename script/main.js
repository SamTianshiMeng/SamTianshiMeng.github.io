
function setLightMode() {
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    document.body.style.color = "rgb(0, 0, 0)";
    document.getElementById("Resume").style.color = "rgb(0, 0, 0)";
    document.getElementById("Projects").style.color = "rgb(0, 0, 0)";
    document.getElementById("Interests").style.color = "rgb(0, 0, 0)";
    document.getElementById("Home").style.color = "rgb(0, 0, 0)";
    document.getElementById("League").style.color = "rgb(0, 0, 0)";
    document.getElementById("Naruto").style.color = "rgb(0, 0, 0)";
    document.getElementById("Bleach").style.color = "rgb(0, 0, 0)";
    document.getElementById("Fairy tail").style.color = "rgb(0, 0, 0)";
    document.getElementById("SC2").style.color = "rgb(0, 0, 0)";
    document.getElementById("Olympic").style.color = "rgb(0, 0, 0)";
    document.getElementById("toggleButton").innerHTML = "On";
    localStorage.setItem('mode', 'light');
}

function setDarkMode() {
    document.body.style.backgroundColor = "rgb(0, 0, 0)";
    document.body.style.color = "rgb(255, 255, 255)";
    document.getElementById("Resume").style.color = "rgb(255, 255, 255)";
    document.getElementById("Projects").style.color = "rgb(255, 255, 255)";
    document.getElementById("Interests").style.color = "rgb(255, 255, 255)";
    document.getElementById("Home").style.color = "rgb(255, 255, 255)";
    document.getElementById("League").style.color = "rgb(255, 255, 255)";
    document.getElementById("Naruto").style.color = "rgb(255, 255, 255)";
    document.getElementById("Bleach").style.color = "rgb(255, 255, 255)";
    document.getElementById("Fairy tail").style.color = "rgb(255, 255, 255)";
    document.getElementById("SC2").style.color = "rgb(255, 255, 255)";
    document.getElementById("Olympic").style.color = "rgb(255, 255, 255)";
    document.getElementById("toggleButton").innerHTML = "On";
    localStorage.setItem('mode', 'dark');
}
function myFunction() {
    document.getElementById("textsizechange").style.fontSize = "x-large";
    document.getElementById("program").style.fontSize = "x-large";
  }
function interest()
{
    document.getElementById("textsizechange").style.fontSize = "x-large";
    document.getElementById("anime").style.fontSize = "x-large";
}
function anime()
{
    document.getElementById("textsizechange").style.fontSize = "15px";
    document.getElementById("anime").style.fontSize = "15px";
}
function Original() {
    document.getElementById("textsizechange").style.fontSize = "15px";
    document.getElementById("program").style.fontSize = "15px";
}