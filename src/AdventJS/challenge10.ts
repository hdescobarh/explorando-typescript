/*

Problemas:
1. En dónde meter el carácter.
2. Cuál carácter.

P1. El dónde:

- alto, h => número de lineas sin tronco
- ancho máximo, w = 2h - 1
- punto medio, m = h - 1

Leyenda:
    * espacio _
    * vacío x
    * indice de linea i
    * linea especial, no parte de la altura f

[0] _ _ _ 1 x x x
[1] _ _ 2 _ 3 x x
[2] _ 1 _ 2 _ 3 x
[3] 1 _ 2 _ 3 _ 1
[f] _ _ _ | x x x // el tronco no se contará en los indices de linea

h = 4; w = 7; m = 3

- adornos por linea = i + 1 
- Espacios iniciales = m - i 
- Al agregar adorno, sí adornos pendientes es > 0, agregar espacio

P2. Cuál carácter:

- Es cíclico
Sí hay 3 decoraciones..

decoración   | 0, 1, 2, 0, 1, 2, 0, 1, 2
contador (c) | 0, 1, 2, 3, 4, 5, 6, 7, 8

decoración = c % n, tal que n > 0 y c >=0 (recordar % es remainder, no modulo).
Como el problema dice que siempre habrá decoración, n siempre será positivo

*/

function createChristmasTree(ornaments: string, height: number) {
  return "|";
}
