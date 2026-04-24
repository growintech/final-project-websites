var btn = document.getElementById("themeToggle");

btn.onclick = function() {
    document.body.classList.toggle("dark");
};

var target = new Date("2026-07-12T00:00:00").getTime();

setInterval(function() {

    var now = new Date().getTime();
    var diff = target - now;

    if (diff < 0) return;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));

    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

}, 1000);