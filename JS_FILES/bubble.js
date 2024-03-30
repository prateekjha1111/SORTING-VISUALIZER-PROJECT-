// Function to perform bubble sort algorithm
async function bubbleSort(array) {
    const n = array.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                await swapBars(i, i + 1, array);
                swapped = true;
            }
        }
    } while (swapped);

    return array;
}

async function swapBars(index1, index2, array) {
    const bars = document.querySelectorAll('.bar');
    const tempHeight = array[index1];
    array[index1] = array[index2];
    array[index2] = tempHeight;

    await sleep(100); 
    bars[index1].style.height = array[index1] * 5 + 'px';
    bars[index2].style.height = array[index2] * 5 + 'px';
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const bubbleSortBtn = document.getElementById('bubble-sort-btn');
bubbleSortBtn.addEventListener('click', async function() {
    const bars = document.querySelectorAll('.bar');
    const heights = Array.from(bars).map(bar => parseInt(bar.style.height) / 5);
    await bubbleSort(heights);
});
