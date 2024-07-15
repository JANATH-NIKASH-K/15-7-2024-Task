function fact(n) {
    let r = 1;
    for (let i = 1; i <= n; i++) {
        r *= i;
    }
    return r;
}


console.log(fact(5)); 