/*

If it is already a palindrome, an empty array.
If it is not possible, null.
If a palindrome can be formed with one change, an array with the two positions (indexes) that must be swapped to create it.
If the palindrome can be formed with different swaps, always return the first one found.
*/
function getIndexsForPalindrome(word: string) {
  return [0, 0];
}

const test_cases: [string, number[] | null][] = [
  ["anna", []],
  ["abab", [0, 1]],
  ["abac", null],
  ["aaaaaaaa", []],
  ["aaababa", [1, 3]],
  ["caababa", null],
];

for (const [word, expected] of test_cases) {
  const output = getIndexsForPalindrome(word);
  if (output.toString() === expected?.toString()) {
    console.log(
      `Failed with: ${word}\nExpected: ${expected}. Obtained: ${output}`
    );
  }
}
