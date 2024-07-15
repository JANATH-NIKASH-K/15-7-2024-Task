function Palindrome(str) {
    
    const c = str.toLowerCase().replace(/[\W_]/g, '');
    const r = c.split('').reverse().join('');
    return c === r;
}

console.log(Palindrome("A man, a plan, a canal, Panama")); 
console.log(Palindrome("race car")); 
console.log(Palindrome("hello")); 