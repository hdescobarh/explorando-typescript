/* En mi primer intento usé Math.max(original.length, modified.length).
Salió un aviso de que había cargado 50 variables globales.
¿Eso es malo? */

/*
Notes:

- There will always be one different step or none.
- The modification can occur anywhere in the string.
- The original steps could be empty
*/

function findNaughtyStep(original: string, modified: string): string {
  for (let i = 0; i < original.length; i++) {
    if (original[i] === modified[i]) {
      continue;
    }
    if (original.length > modified.length) {
      return original[i];
    } else if (original.length < modified.length) {
      return modified[i];
    } else {
      break;
    }
  }

  if (original.length === modified.length) {
    return "";
  } else {
    return modified.slice(-1);
  }
}

console.log(findNaughtyStep("abcd", "abcde"), "e");

console.log(findNaughtyStep("stepfor", "stepor"), "f");

console.log(findNaughtyStep("abcde", "abcde"), "");

console.log(findNaughtyStep("", "e"), "e");
