// Function to generate a random background color
function generateBackground() {
    var color1 = document.getElementById("color1").value;
    var color2 = document.getElementById("color2").value;
    var body = document.getElementsByTagName("body")[0];
    body.style.background = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
}

// Event listener for the Generate button
document.getElementById("generate-btn").addEventListener("click", generateBackground);
