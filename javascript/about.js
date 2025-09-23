const now = new Date();
const hour = now.getHours();
let message = "";
if (hour >= 5 && hour < 12) {
    message = "Good Morning Gamer 🌄";
}
else if (hour >= 12 && hour < 17) {
    message = "Good Afternoon Gamer 🕑";
}
else if (hour >= 17 && hour < 21) {
    message = "Good Evening Gamer 🌆";
}
else {
    message = "Good Night Gamer 🌃";
}
document.getElementById("greeting").innerText = message;

const images = [
    { src: "../images/pratikSalunke.jpg", main: "Pratik Salunke", sub: "Founder & Pro-Gamer" },
    { src: "../images/omKadam.jpg", main: "Om Kadam", sub: "Co-Founder" },
    { src: "../images/ashish-Mathpati.jpg", main: "Ashish Mathpathi", sub: "Web-Developer & Gamer" },
    { src: "", main: "", sub: "Web-Developer" },
    { src: "../images/shreyaharde.jpg", main: "Shreya Harde", sub: "Web-Developer & Reviewer" },
    { src: "../images/kanchanKadam.jpg", main: "Kanchan Kadam", sub: "Streamer & Reviewer" },
    { src: "../images/rahul.jpg", main: "Rahul Naktode", sub: "Pro-Gamer & Streamer" }
];

let index = 0;
const slideElement = document.getElementById("slide");
const mainName = document.getElementById("main-name");
const subName = document.getElementById("sub-name");

function showSlide(i) {
    slideElement.src = images[i].src;
    mainName.textContent = images[i].main;
    subName.textContent = images[i].sub;
}

function next() {
    index = (index + 1) % images.length;
    showSlide(index);
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    showSlide(index);
}

setInterval(next, 3000);