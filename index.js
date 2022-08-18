var isAnagram = function(test, original) {
  let first = test.toLowerCase().split("").sort().join("");
  let second = original.toLowerCase().split("").sort().join("");
  return first === second;
};

console.log(isAnagram("foefet", "toffee"));   // returns true
console.log(isAnagram("apple", "pale"));    // returns false

