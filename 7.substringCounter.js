function countSubstrings(string, word) {
  return string.split(word).length - 1;
}

console.log(countSubstrings('This is perfect isforisis', 'is'))