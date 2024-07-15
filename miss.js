function missnum(arr) {
    const n = arr.length + 1;
    const a = (n * (n + 1)) / 2;

    let s = 0;
    for (let i = 0; i < n - 1; i++) {
        s = s + arr[i];
    }

    let m = a - s;

    return m;