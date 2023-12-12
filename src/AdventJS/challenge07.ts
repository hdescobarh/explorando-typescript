/*
- Hay (size * 2 - 1) lineas => siempre impar!
- El primer y último carácter visible de una linea es #
- La linea del centro actúa como un centro de simetría, excluyendo os espacios iniciales
- Cuando size = 2 no hay simetría, es un solo carácter en una linea.
- La longitud máxima es igual al número de lineas
- Es como sí la simetría se "rompe" por meter strings
    vacíos al final en unos y espacios al inicio en su reflejo
*/

function drawGift(size: number, symbol: string) {
  // base case
  if (size === 1) {
    return "#\n";
  }

  // set parameters
  const line_number = size * 2 - 1;
  const median_line = size - 1;
  const last_line = line_number - 1;
  const filling_size = size - 2;

  const draw: string[] = [];

  for (let line = 0; line < line_number; line++) {
    const leading_size = median_line - line;
    const leading_spaces = leading_size >= 0 ? " ".repeat(leading_size) : "";
    const border = 0 < line && line < last_line ? "#" : "";

    const main_filling = [0, median_line, last_line].includes(line)
      ? "#".repeat(filling_size)
      : symbol.repeat(filling_size);
    let trailing_filling;
    if ([0, last_line].includes(line)) {
      trailing_filling = "";
    } else if (line <= median_line) {
      trailing_filling = symbol.repeat(line - 1);
    } else {
      trailing_filling = symbol.repeat(last_line - line - 1);
    }

    draw.push(
      `${leading_spaces}#${main_filling}#${trailing_filling}${border}\n`
    );
  }
  return draw.join("");
}

let expected =
  "\
   ####\n\
  #++##\n\
 #++#+#\n\
####++#\n\
#++#+#\n\
#++##\n\
####\n";

let output = drawGift(4, "+");

console.log(output, expected === output);

output = drawGift(1, "^");
expected = "#\n";

console.log(output, expected === output);

output = drawGift(5, "*");
expected =
  "    #####\n\
   #***##\n\
  #***#*#\n\
 #***#**#\n\
#####***#\n\
#***#**#\n\
#***#*#\n\
#***##\n\
#####\n";

console.log(output, expected === output);
