function palindrome(str) {
  var characters = /\W|_/g;
  str = str.replace(characters, "").toLowerCase();
  var word = str.replace(characters, "").toLowerCase();
  word = word.split("");
  word = word.reverse("");
  word = word.join("");
  return Boolean(str === word);
}

palindrome("eye");