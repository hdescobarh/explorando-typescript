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
caracteres con mismatches?
No. No es un punto equidistante, si no un punto tal que la distancia desde los mismatches es la misma

Tratando de formalizar un poco...

Sea 𝐬 una cadena de texto de longitud len(𝐬) con indices 0 ≤ 𝑖 < len(𝐬)

(D1) La reflexión sobre los indices 𝑖 de 𝐬 se define como 𝐑(𝑖) = 𝑖' = len(𝐬)-1-𝑖
(D1.1) 𝐬' = 𝐬[𝐑(len(𝐬)-1)], 𝐬[𝐑(len(𝐬)-2)], ..., 𝐬[𝐑(0)]
(D1.2) Sí 𝐬[𝑖] = α ⟹ 𝐬[𝑖'] = α'

(D2) La relación mismatches respecto a la reflexión 𝐔 = {(𝑖, 𝑖') | 𝐬[𝑖] ≠ 𝐬[𝑖']}, Dom(𝐔)={𝑖 | 0 ≤ 𝑖 < len(𝐬)}
(D2.1) De la definición de 𝐔, se tiene que es reflexiva. (𝑖, 𝑖') ∈ 𝐔 ⟹ (𝑖', 𝑖) ∈ 𝐔
(D2.2) 𝐔½ ⊂ 𝐔 tal que Dom(𝐔½)={𝑖 | 0 ≤ 𝑖 < len(𝐬)/2}
(D3) Sea "pal" la propiedad ser palíndromo. pal(𝐬) ⟺ 𝐔 = ∅
(D4) La pre imagen 𝐬⁻{α} = {𝑖 | 𝐬[𝑖] = α}
(D4) La distancia 𝐃 esta dada por 𝐃(𝑖, 𝑖') = |𝑖 - 𝑗|

---

Hipótesis:

Sí hay una ÚNICA solución.
- n(𝐔) = 2, 𝐔 = {(𝑖, 𝑖'), (𝑖', 𝑖)}, 𝑖 ≠ 𝑖'
- la solución {𝑚, 𝑛} satisface que (𝑚 = 𝑖 XOR 𝑚 = 𝑖'), 𝑛 ≠ 𝑖, 𝑖'
(a) Sí 𝑚 = 𝑖 ⟹ n ∈ 𝐬⁻{s[𝑖']} \ {𝑖'}
(b) 𝐃(𝑖, 𝑛) = 𝐃(𝑛, 𝑖')  > 0 
(c) sí (a) ^ (b) ⟹ len(𝐬) % 2 = 1 y 𝑚 es el punto medio

Por lo tanto, 
Sí n(𝐔) > 2 ⟹ no hay solución o hay multiples.
Sí hay solución, hay dos pares (𝑖, 𝑖'), (𝑗, 𝑗') ∈ 𝐔½ tales que la solución es (𝑖, 𝑗),
y esta debe satisfacer que 𝐬[𝑖] = s[𝑗'] y 𝐬[𝑗] = s[𝑖']

  
-----------------
- If it is not possible, null.
- If a palindrome can be formed with one change, an array with the two positions (indexes) that must be swapped to create it.

  No especifica el orden de los indices de la solución. [1, 4] y [4, 1] son la misma solución. ¿cuál reporto?

- If the palindrome can be formed with different swaps, always return the first one found.

  El primero encontrado significa el que involucra el carácter mas a la derecha???
*/
function getIndexsForPalindrome(word: string) {
  // asume la palabra esta toda en lower-case
  const s = Array.from(word);

  // get 𝐔½, n(𝐔½) = number of solutions if exist
  const mismatch_subset: [number, number][] = [];
  const reflection_coefficient = s.length - 1;
  const mid_cutoff = s.length / 2;
  for (let i = 0; i < mid_cutoff; i++) {
    const i_reflect = reflection_coefficient - i;
    if (s[i] !== s[i_reflect]) {
      mismatch_subset.push([i, i_reflect]);
    }
  }

  //If it is already a palindrome, an empty array.
  if (mismatch_subset.length === 0) {
    return [];
  } else if (mismatch_subset.length === 1) {
    const mid_point = (s.length - (s.length % 2)) / 2;
    const [i, i_reflect] = mismatch_subset[0];
    let solution = null;

    if (s[i] === s[mid_point]) {
      solution = [mid_point, i_reflect];
    } else if (s[i_reflect] === s[mid_point]) {
      solution = [i, mid_point];
    }

    return solution;
  } else {
    if (
      s[mismatch_subset[0][0]] !== s[mismatch_subset[1][1]] ||
      s[mismatch_subset[0][1]] !== s[mismatch_subset[1][0]]
    ) {
      return null;
    }
    return [mismatch_subset[0][0], mismatch_subset[1][0]];
  }
}

const test_cases: [string, number[] | null][] = [
  // Ya son palíndromo
  ["anna", []],
  ["aaaaaaaa", []],
  ["reconocer", []],

  // única solución
  ["aaababa", [1, 3]],
  ["ababaaa", [3, 5]],
  ["acababa", [1, 3]],

  // multiples soluciones
  ["abab", [0, 1]],
  ["rceonocer", [1, 2]],

  // Sin solución
  ["abac", null],
  ["caababa", null],
];

for (const [word, expected] of test_cases) {
  const output = getIndexsForPalindrome(word);
  if (output?.toString() !== expected?.toString()) {
    console.log(
      `Failed with: ${word}\nExpected: ${expected}. Obtained: ${output}\n`
    );
  }
}
