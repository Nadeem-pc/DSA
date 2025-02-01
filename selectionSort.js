// Ascending order
function selectionSort(arr){
    for(let i = 0; i < arr.length -1; i++){
        let minIndex = i
        // Find the smallest element in the remaining unsorted array
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j   
            }
        }
        // Swap the smallest element with the first element of the unsorted portion
        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}
// let array = [64,25,22,11,8,27]
// console.log(selectionSort(array));


// Sort Strings in Descending Order
function selectionSortStrings(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j].toLowerCase() > arr[maxIndex].toLowerCase()) {
                maxIndex = j;
            }
        }
        if (maxIndex !== i) {
            [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
        }
    }
    return arr;
}

const strings = ["banana", "Apple", "cherry", "date", "elderberry"];
// console.log(selectionSortStrings(strings));

// Descending order
function selectionSort(arr){
    for(let i = 0; i < arr.length -1; i++){
        let minIndex = i
        // Find the smallest element in the remaining unsorted array
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] > arr[minIndex]){
                minIndex = j   
            }
        }
        // Swap the smallest element with the first element of the unsorted portion
        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}
let array = [64,25,22,11,8,27]
console.log(selectionSort(array));