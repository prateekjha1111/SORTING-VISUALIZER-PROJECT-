// Function to generate random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create bars based on array values
function createBars(array) {
    const barsContainer = document.getElementById('bars-container');
    barsContainer.innerHTML = ''; // Clear previous bars

    for (let i = 0; i < array.length; i++) {
        const barHeight = array[i] * 5; // Scale the height of bars
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = barHeight + 'px';
        barsContainer.appendChild(bar);
    }
}

// Function to generate new array of random heights for bars
function generateNewArray() {
    const newArray = [];
    for (let i = 0; i < 100; i++) {
        newArray.push(getRandomInt(1, 100)); 
    }
    createBars(newArray);
}
generateNewArray();
const generateArrayBtn = document.getElementById('generate-array-btn');
generateArrayBtn.addEventListener('click', generateNewArray);
