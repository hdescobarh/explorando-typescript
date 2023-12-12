/*
10 objetos => 1 caja {}
5 cajas => 1 pallet []
objetos restantes => bolsa ()

Apilamiento: []{}()
*/
function organizeGifts(gifts: string) {
  const packer = (item: string, items_number: number) => {
    // get items distribution
    const remaining_items = items_number % 10;
    const starting_boxes = (items_number - remaining_items) / 10;
    const box_number = starting_boxes % 5;
    const pallet_number = (starting_boxes - box_number) / 5;
    // format text representation
    const pallets = `[${item}]`.repeat(pallet_number);
    const boxes = `{${item}}`.repeat(box_number);
    const bag =
      remaining_items > 0 ? "(" + `${item}`.repeat(remaining_items) + ")" : "";
    return `${pallets}${boxes}${bag}`;
  };

  // parses string a get formatted output
  let storage = "";
  for (const g of gifts.matchAll(/([0-9]+)([a-zA-Z])/g)) {
    storage += packer(g[2], Number(g[1]));
  }
  return storage;
}

const test = [
  [organizeGifts("76a11b"), "[a]{a}{a}(aaaaaa){b}(b)"],
  [organizeGifts("20a"), "{a}{a}"],
  [organizeGifts("70b120a4c"), "[b]{b}{b}[a][a]{a}{a}(cccc)"],
];
for (const [actual, expected] of test) {
  console.log(actual, actual === expected);
}
