function foo(x) {
  if (isNaN(x)) {
    return NaN; // Or throw an error: throw new Error('Input is NaN');
  } else if (x === null) {
    return 0; 
  } else if (x < 0) { 
    return -1; 
  } else { 
    return 1; 
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(-1)); // Output: -1
console.log(foo(0)); // Output: 1
console.log(foo(NaN));// Output: NaN