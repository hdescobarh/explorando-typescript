function findFirstRepeated(gifts: Array<number>): number {
  const checked: Array<number> = [];
  for (const v of gifts) {
    if (checked.includes(v)) {
      return v;
    }
    checked.push(v);
  }
  return -1;
}

console.log(findFirstRepeated([2, 1, 3, 5, 3, 2]), "3");
console.log(findFirstRepeated([1, 2, 3, 4]), "-1");
console.log(findFirstRepeated([5, 1, 5, 1]), "5");
