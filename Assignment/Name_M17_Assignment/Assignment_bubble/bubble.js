function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    for (let i = 0; i < n; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }        
        if (!swapped) {
            break;
        }
    }
}
const transactionAmounts = [1500, 1200, 786, 450, 2000, 2300, 546, 780, 800, 900, 2000]
bubbleSort(transactionAmounts);
console.log(transactionAmounts);
