function viewingModeToggle() {
    var currentBgColor = getComputedStyle(document.body).backgroundColor.toString();
    var toggleButton = document.getElementById("ColorContrast");
    var buttons = document.querySelectorAll("button");

    if (currentBgColor === 'rgb(255, 255, 255)') {
        document.body.style.backgroundColor = "rgb(0, 0, 0)";
        document.body.style.color = "rgb(255, 255, 255)";
        document.getElementById("Resume").style.color = "rgb(255,255,255)" 
        document.getElementById("Projects").style.color = "rgb(255,255,255)" 
        document.getElementById("Interests").style.color = "rgb(255,255,255)" 

        buttons.forEach(function(button) {
            button.style.color = "rgb(245, 245, 245)";
        })

        toggleButton.innerHTML = "On";

    } else {
        document.body.style.backgroundColor = "rgb(255, 255, 255)";
        document.body.style.color = "rgb(0, 0, 0)";
        document.getElementById("Resume").style.color = "rgb(0,0,0)";
        document.getElementById("Projects").style.color = "rgb(0,0,0)" 
        document.getElementById("Interests").style.color = "rgb(0,0,0)" 


        buttons.forEach(function(button) {
            button.style.color = "#555";
        })

        toggleButton.innerHTML = "Off";
    }
    function changeTextSize() {
        var newSize = document.getElementById("sizeRange").value;
        document.getElementById("text").style.fontSize = newSize + "px";
    }

    // Add event listener to the range input
    document.getElementById("sizeRange").addEventListener("input", changeTextSize);
}