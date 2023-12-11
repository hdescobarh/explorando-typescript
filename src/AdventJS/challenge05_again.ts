function cyberReindeer(road: string, time: number) {
  const snapshots = [road];
  let template = "." + road.slice(1);
  let santa_location = 0;
  for (let tick = 1; tick < time; tick++) {
    // Open barriers
    if (tick === 5) {
      template = template.replace(/[|]/g, "*");
    }

    // Santa tries to move
    if (template[santa_location + 1] !== "|") {
      santa_location += 1;
    }

    // Gets new state's string
    const to_print =
      template.slice(0, santa_location) +
      "S" +
      template.slice(santa_location + 1);
    snapshots.push(to_print);
  }
  return snapshots;
}

const expected = [
  "S..|...|..",
  ".S.|...|..",
  "..S|...|..",
  "..S|...|..",
  "..S|...|..",
  "...S...*..",
  "...*S..*..",
  "...*.S.*..",
  "...*..S*..",
  "...*...S..",
];

const output = cyberReindeer("S..|...|..", 10);
console.log(expected.toString() === output.toString());
console.log(output);
