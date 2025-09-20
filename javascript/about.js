const now = new Date();
const hour = now.getHours();
let message = "";

if (hour >= 5 && hour < 12) {
    message = "Good Morning Friend 🌄";
}
else if (hour >= 12 && hour < 17) {
    message = "Good Afternoon Friend 🕑";
}
else if (hour >= 17 && hour < 21) {
    message = "Good Evening Friend 🌆";
}
else {
    message = "Good Night Friend 🌃";
}

document.getElementById("greeting").innerText = message;