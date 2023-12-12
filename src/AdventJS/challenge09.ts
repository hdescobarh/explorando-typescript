/*

- Dos colores intercalados => ciclos de periodo 2
- Pregunta cuantos cambios, no cuales => ¿se puede ignorar el valor la ultima luz?

Estrategia:

Planteamiento inicial:
una ventana deslizante de tamaño dos, cuenta por ventana
cuantos tienen el mismo carácter y ese será el mínimo.


Caso A:
¿Efecto del último valor?

'🔴', '🔴' | '🟢', '🟢' | '🔴' => 2
'🔴', '🔴' | '🟢', '🟢' | '🟢' => 2

Varía cuales cambian, no cuantas

Caso B:

'🔴', '🟢' | '🟢', '🟢' | '🔴' => 1
'🔴', '🟢' | '🟢', '🟢' | '🟢' => 2

B1:
Afecta.. ¿es porque el número de no validas es impar?

'🔴', '🟢' | '🟢', '🟢' | '🟢', '🟢' | '🔴' => 2
'🔴', '🟢' | '🟢', '🟢' | '🟢', '🟢' | '🟢' => 3

No.

B2:

'🔴', '🟢' | '🔴', '🔴' | '🟢', '🟢' | '🔴' => 2
'🔴', '🟢' | '🔴', '🔴' | '🟢', '🟢' | '🟢' => 3

No es el número. ¿es que están intercalados los tipos ('🔴', '🟢') de invalidas?

B3:

'🟢', '🟢' | '🔴', '🔴' | '🟢', '🟢' | '🔴' => 3
'🔴', '🔴' | '🔴', '🔴' | '🟢', '🟢' | '🟢' => 3

No. Son los grados de libertad. Sí todos los pares son inválidos,
se puede ignorar el ultimo impar para el conteo. 

Caso C:
Hipótesis: 
El patrón valido lo determina la primera dupla valida.
El número de transformaciones esta dado por el número de duplas que no corresponden con el patrón.
Sí hay un patrón valido, y el primer miembro del patrón no coincide
con el final de a lista (el impar), entonces se adiciona 1 paso extra.

C1:

'🟢', '🔴' | '🟢', '🟢' | '🔴' => 2 = 1 (por el final) + 1 (1 diferencia con el patrón)
'🟢', '🔴' | '🟢', '🟢' | '🟢' => 1 (1 diferencia con el patrón)


'🟢', '🔴' | '🔴', '🟢' | '🔴' => 3 = 2 ( dos diferencias patron) + 1 (diferencia impar)
'🟢', '🔴' | '🔴', '🟢' | '🟢' => 2 = 2 ( dos diferencias patron)

C2:
¿Afecta dónde aparece el patrón? (comparar con C1)

'🟢', '🟢' | '🟢', '🔴' | '🔴' => 2
'🟢', '🟢' | '🟢', '🔴' | '🟢' => 1

'🔴', '🟢' | '🟢', '🔴' | '🔴' => 2
'🔴', '🟢' | '🟢', '🔴' | '🟢' => 3

Sí.

Conclusión:

2 colores en duplas de 2, algunas impares. 3 tipos de "señales":

R: {['🔴', '🟢'] , ['🔴', undefined]}
G: {['🟢', '🔴'] , ['🟢', undefined]}
L: {['🟢', '🟢'] , ['🔴', '🔴']}

- La referencia es la primera R o G en aparecer.
- Existe una función 𝙛: 𝐀 → {0, 1, 2}, 𝐀 = {R, G, L}, tal que:
    (1). Es simétrica: 𝙛(𝒙, 𝒚) = 𝙛(𝒚, 𝒙), ∀𝒙, 𝒚 ∈ 𝐀
    (2). 𝙛(𝒙, 𝒙) = 0, ∀𝒙 ∈ 𝐀
    (3) (R,G) ↦ 2 , (R,L) ↦ 1, (G,L) ↦ 1

Estrategia:

1. Con una ventana deslizante extraigo señal.
    1.1. La referencia 𝝆 se extrae
    1.2. se extrae el numero de veces 𝜭(𝒙) que 𝒙 ∈ 𝐀 aparece
2. El número mínimo es: ∑ 𝜭(𝒙)· 𝙛(𝝆, 𝒙)
*/

function adjustLights(lights: string[]) {
  // Cod
  return 0;
}
