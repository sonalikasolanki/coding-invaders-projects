function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

const submissionIDs = [67, 60, 58, 75, 53, 71, 63, 52, 53, 59, 57, 59, 63, 76, 53];

insertionSort(submissionIDs);

console.log(submissionIDs);
