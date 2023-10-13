function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            mergedArr.push(left[leftIndex]);
            leftIndex++;
        } else {
            mergedArr.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return mergedArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let album1Songs = [259, 260, 264, 265, 273, 276, 279, 300];
let album2Songs = [214, 262, 266, 275, 290, 306];

let sortedSongs = mergeSort([...album1Songs, ...album2Songs]);
console.log(sortedSongs);
