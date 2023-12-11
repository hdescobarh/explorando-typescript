function cyberReindeer(road: string, time: number): string[] {
  let template: string[] = Array.from(road);
  const snapshots: string[] = [template.join("")];
  template[0] = ".";
  let santa_location: number = 0;

  for (let tick = 1; tick < time; tick++) {
    // Open barriers
    if (tick === 5) {
      template = template.map((v) => (v === "|" ? "*" : v));
    }

    // Santa tries to move
    if (
      template[santa_location + 1] == "." ||
      template[santa_location + 1] == "*"
    ) {
      santa_location += 1;
    }

    // Gets new state's string
    const to_print = [...template];
    to_print[santa_location] = "S";
    snapshots.push(to_print.join(""));
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
