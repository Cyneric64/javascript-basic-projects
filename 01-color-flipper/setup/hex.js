const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {

    // Use a loop to generate a random hex color code
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }

    // Set background color and text label to the generated hex code
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})