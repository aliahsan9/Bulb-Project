const bulb = document.getElementById("bulb");
const button = document.getElementById("toggleButton");
let isOn = false;

button.addEventListener("click", () => {
    isOn = !isOn;

    if (isOn) {
        bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif"; // Bulb on image
        button.textContent = "Turn Off";
    } else {
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif"; // Bulb off image
        button.textContent = "Turn On";
    }
});
