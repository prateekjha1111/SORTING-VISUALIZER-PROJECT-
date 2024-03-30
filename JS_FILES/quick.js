// Function to perform quick sort algorithm
async function quickSort(array, left = 0, right = array.length - 1) {
    if (left >= right) {
        return;
    }

    const pivotIndex = await partition(array, left, right);

    await quickSort(array, left, pivotIndex - 1);
    await quickSort(array, pivotIndex + 1, right);

    return array;
}

async function partition(array, left, right) {
    const pivotValue = array[right];
    let pivotIndex = left;

    for (let i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            await swapBars(i, pivotIndex, array);
            pivotIndex++;
        }
    }

    await swapBars(pivotIndex, right, array);
    return pivotIndex;
}

const quickSortBtn = document.getElementById('quick-sort-btn');
quickSortBtn.addEventListener('click', async function() {
    const bars = document.querySelectorAll('.bar');
    const heights = Array.from(bars).map(bar => parseInt(bar.style.height) / 5);
    await quickSort(heights);
});
