// Function to perform selection sort algorithm
async function selectionSort(array) {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            await swapBars(i, minIndex, array);
        }
    }
    return array;
}

const selectionSortBtn = document.getElementById('selection-sort-btn');
selectionSortBtn.addEventListener('click', async function() {
    const bars = document.querySelectorAll('.bar');
    const heights = Array.from(bars).map(bar => parseInt(bar.style.height) / 5);
    await selectionSort(heights);
});
