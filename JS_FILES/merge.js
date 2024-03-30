// Function to perform merge sort algorithm
async function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);

    const sortedLeft = await mergeSort(leftHalf);
    const sortedRight = await mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}

// Function to merge two sorted arrays
async function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

    const bars = document.querySelectorAll('.bar');
    for (let i = 0; i < result.length; i++) {
        await sleep(10); 
        bars[i].style.height = result[i] * 5 + 'px';
    }

    return result;
}

const mergeSortBtn = document.getElementById('merge-sort-btn');
mergeSortBtn.addEventListener('click', async function() {
    const bars = document.querySelectorAll('.bar');
    const heights = Array.from(bars).map(bar => parseInt(bar.style.height) / 5);
    await mergeSort(heights);
});
