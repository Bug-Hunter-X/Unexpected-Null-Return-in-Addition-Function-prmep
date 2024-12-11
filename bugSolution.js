function foo(a, b) {
  a = a === null ? 0 : a; // Handle null values
  b = b === null ? 0 : b; // Handle null values
  return a + b;
}

console.log(foo(null, 1)); // 1
console.log(foo(1, null)); // 1
console.log(foo(1, 2)); // 3
console.log(foo(null, null)); // 0