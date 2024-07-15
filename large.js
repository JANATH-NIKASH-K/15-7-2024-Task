function find(arr) {
    if (arr.length === 0) return; 
    let l = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > l) {
            l = arr[i];
        }
    }
    return l;
}
console.log(find([3, 5, 1, 8, 12])); 
console.log(find([])); 