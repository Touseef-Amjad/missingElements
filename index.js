function missingNumbers(arr) {
  if (arr.length === 0) {
    throw new Error("Array must not be empty");
  }

  let max = arr[0];
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    set.add(arr[i]);
  }

  let missing = [];
  for (let i = 0; i <= max; i++) {
    if (!set.has(i)) {
      missing.push(i);
    }
  }

  return missing;
}

console.log(missingNumbers([3, 4, 9, 1, 7, 3, 2, 6]));
console.log(missingNumbers([1, 2, 3, 4, 5]));
