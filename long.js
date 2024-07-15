function longest(str) {
    const words = str.split(' ');
    let l = "";
    for (let w of words) {
        if (w.length > l.length) {
            l = w;
        }
    }
    return l;
}
console.log(longest("A quick brown fox jumped over the lazy dog"));
