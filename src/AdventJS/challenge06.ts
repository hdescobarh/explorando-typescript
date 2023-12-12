/* 
Intuitivamente, el máximo es equivalente a encontrar hacia donde hay mas movimientos
y sumarle los libres. ¿Realmente es así? Solo por diversión:

El problema se puede reducir al siguiente:
Dadas las constantes 𝒂, 𝒃, 𝒄 ∈ ℕ₀ y las variables 𝒙, 𝒚 ∈ [0,𝒄] ⊂ ℕ₀,
donde 𝒂, 𝒙 representan el número de movimientos a la derecha,
𝒃, 𝒚 representan el número de movimientos a la izquierda, y
𝒄, el número de movimientos libres.

Encontrar:

Max(|(𝒂+𝒙) - (𝒃+𝒚)|)

Tal que (1) 𝒙 + 𝒚 = 𝒄

(2) Aplicando (1) al problema:

Max(|(𝒂+𝒙) - (𝒃+𝒚)|) =
Max(|(𝒂-𝒃-𝒄) + 2𝒙|) = 
Max(𝙛(𝒙)), tal que 𝒙 ∈ [0,𝒄]

(3) Sea 𝒌 = (𝒂-𝒃-𝒄) ∈ ℕ, por propiedades del valor absoluto
𝙛(𝒙) = 0 ⇔ 𝒙 = -𝒌/2

Es la raíz y mínimo global de 𝙛(𝒙)

(4) Por geometría se puede corroborar que
el máximo local 𝙛(𝒙) en [0,𝒄] está dado por la posición de
la raíz relativo a 𝒄:

(4a) 𝙛(𝒄) = |𝒂-𝒃+𝒄|, sí -𝒌 < 𝒄
(4b) 𝙛(0) = |𝒂-𝒃-𝒄|, sí -𝒌 > 𝒄
(4c) 𝙛(0) ∧ 𝙛(𝒄), sí -𝒌 = 𝒄


(5) Derivando desde (3):

(5a) -𝒌 < 𝒄 ⇒ 𝒌 > 𝒄 ⇒ 𝒂-𝒃 > 0 ⇒ 𝒂 > 𝒃
(5b) -𝒌 > 𝒄 ⇒ 𝒌 < 𝒄 ⇒ 𝒂-𝒃 < 0 ⇒ 𝒂 < 𝒃
(5c) -𝒌 = 𝒄 ⇒ 𝒌 + 𝒄 = 0 ⇒ 𝒂-𝒃 = 0 ⇒ 𝒂 = 𝒃

(6) Por (4) y (5), Max(|(𝒂+𝒙) - (𝒃+𝒚)|) =

    |(𝒂+𝒄) - (𝒃+0)|, sí 𝒂 > 𝒃
    |(𝒂+0) - (𝒃+𝒄)|, sí 𝒂 < 𝒃
    |𝒄| = |-𝒄|, sí 𝒂 = 𝒃

*/

function maxDistance(movements: string) {
  let right = 0;
  let left = 0;
  let free = 0;
  // get moves
  for (const m of movements) {
    if (m === ">") {
      right += 1;
    } else if (m === "<") {
      left += 1;
    } else {
      free += 1;
    }
  }
  // Aplicando la definición de valor absoluto:
  if (right >= left) {
    return right + free - left;
  } else {
    return left + free - right;
  }
}

let output = maxDistance(">>*<");
let expected = 2;
console.log(output, expected, output === expected);

output = maxDistance("<<<>");
expected = 2;
console.log(output, expected, output === expected);

output = maxDistance(">***>");
expected = 5;
console.log(output, expected, output === expected);
