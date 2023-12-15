/*

Sí alineamos cada palabra con su reversa tenemos un mapa de los no-match:

(i) indice. (F) cadena derecha. (R) Cadena revés. (M) 1 sí match, 0 de lo contrario.

i  0 1 2 3 4 5 6
F  a a a b a b a
R  a b a b a a a
M  1 0 1 1 1 0 1

Sí hay solución:
- Par de no-match = a un cambio
- Los caracteres en el no-match => caracteres involucrados en el cambio
- La posición de los no-match => el cambio involucra al menos una de las posiciones

¿el carácter con el cual cambiar debe ser equidistante a los dos no-match, y ser igual a alguno de los
caracteres con missmatches 


If it is not possible, null.
If a palindrome can be formed with one change, an array with the two positions (indexes) that must be swapped to create it.
If the palindrome can be formed with different swaps, always return the first one found.
*/
function getIndexsForPalindrome(word: string) {
  const forward = Array.from(word);
  const get_matches = (forward: string[]) => {
    const reverse_term = forward.length - 1;
    let no_matches = 0;
    const match_map: boolean[] = [];
    for (let i = 0; i < forward.length; i++) {
      const match = forward[i] === forward[reverse_term - i];
      no_matches += match ? 0 : 1;
      match_map.push(match);
    }
    return [no_matches, match_map];
  };

  //If it is already a palindrome, an empty array.
  const [no_matches, match_map] = get_matches(forward);
  if (no_matches === 0) {
    return [];
  }
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
  if (output.toString() !== expected?.toString()) {
    console.log(
      `Failed with: ${word}\nExpected: ${expected}. Obtained: ${output}\n`
    );
  }
}
