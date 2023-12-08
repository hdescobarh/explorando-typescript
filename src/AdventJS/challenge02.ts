function manufacture(gifts: string[], materials: string): string[] {
  // lowercase to make comparisons case insensitive
  materials = materials.toLowerCase();

  // check by gift if it can be produced
  const can_produce = (item: string) => {
    const item_pieces = Array.from(item.toLowerCase());
    let counter = 0;
    for (const piece of item_pieces) {
      if (materials.includes(piece)) {
        counter += 1;
      }
    }
    return counter == item_pieces.length;
  };

  // evaluate each gift
  const available_gifts: string[] = [];
  for (const item of gifts) {
    if (can_produce(item)) {
      available_gifts.push(item);
    }
  }

  return available_gifts;
}

console.log(manufacture(["tren", "oso", "pelota"], "tronesa"), ["tren", "oso"]);
console.log(manufacture(["juego", "puzzle"], "jlepuz"), ["puzzle"]);
console.log(manufacture(["libro", "ps5"], "psli"), []);
