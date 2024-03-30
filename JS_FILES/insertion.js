// Function to perform insertion sort algorithm
async function insertionSort(array) {
    const n = array.length;

    for (let i = 1; i < n; i++) {
        let current = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            await swapBars(j, j + 1, array);
            j--;
        }

        array[j + 1] = current;
    }
    return array;
}

const insertionSortBtn = document.getElementById('insertion-sort-btn');
insertionSortBtn.addEventListener('click', async function() {
    const bars = document.querySelectorAll('.bar');
    const heights = Array.from(bars).map(bar => parseInt(bar.style.height) / 5);
    await insertionSort(heights);
});
