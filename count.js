function charc(str) {
    const c = {};
    for (let char of str) {
        if (c[char]) {
            c[char]++;
        } else {
            c[char] = 1;
        }
    }
    return c;
}

console.log(charc("hello")); 


