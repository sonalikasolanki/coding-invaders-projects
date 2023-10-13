function isValidSubsequence(array, sequence) {
    let arrIndex = 0;
    let seqIndex = 0;

    while (arrIndex < array.length && seqIndex < sequence.length) {
        if (array[arrIndex] === sequence[seqIndex]) {
            seqIndex++;
        }
        arrIndex++;
    }

    return seqIndex === sequence.length;
}

let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];
let result = isValidSubsequence(array, sequence);
console.log(result); 
