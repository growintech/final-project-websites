var btn = document.getElementById("themeToggle");

btn.onclick = function() {
    document.body.classList.toggle("dark");
};

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = "scale(1.03)";
    });

    box.addEventListener('mouseleave', () => {
        box.style.transform = "scale(1)";
    });
});