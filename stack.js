const isClosedBracket = (str) => {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of str) {
    if (char in map) {
      stack.push(char);
    } else {
      const lastOpenBr = stack.pop();
      if (char !== map[lastOpenBr]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isClosedBracket("()"));
console.log(isClosedBracket("()[]{}"));
console.log(isClosedBracket("(]"));
console.log(isClosedBracket("([)]"));
console.log(isClosedBracket("{[]}"));
