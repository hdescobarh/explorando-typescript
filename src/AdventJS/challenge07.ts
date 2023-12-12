/*
- Hay (size * 2 - 1) lineas => siempre impar!
- El primer y último carácter visible de una linea es #
- La linea del centro actúa como un centro de simetría, excluyendo os espacios iniciales
- La longitud máxima es igual al número de lineas
- Es como sí la simetría se "rompe" por meter strings
    vacíos al final en unos y espacios al inicio en su reflejo
*/

function drawGift(size: number, symbol: string) {
  const draw: string[] = Array(size * 2 - 1).fill("");

  return draw.join("\n");
}
