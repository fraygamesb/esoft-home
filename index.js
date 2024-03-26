const deepCopy = (obj, visited = new WeakMap()) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (visited.has(obj)) {
    return visited.get(obj);
  }

  let copy = Array.isArray(obj)
    ? []
    : Object.create(Object.getPrototypeOf(obj));

  visited.set(obj, copy);

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = deepCopy(obj[key], visited);
    }
  }

  return copy;
};
