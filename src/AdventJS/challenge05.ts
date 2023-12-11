function cyberReindeer(road: string, time: number): string[] {
  // strings for the game elements
  const str_road = ".";
  const str_santa = "S";
  const str_open = "*";
  const str_closed = "|";

  // parse the string
  const barrier_locations: number[] = [];
  let santa_location: number = -1;
  for (let i = 0; i < road.length; i++) {
    if (road[i] == str_santa) {
      santa_location = i;
    } else if (road[i] == str_closed) {
      barrier_locations.push(i);
    }
  }

  // set starting state
  let barriers_closed = true;
  const template = Array.from(road);
  const snapshots: string[] = [template.join("")];
  template[santa_location] = str_road;

  for (let tick = 1; tick < time; tick++) {
    // check barriers update
    if (barriers_closed && tick >= 5) {
      barriers_closed = false;
      barrier_locations.forEach((i) => {
        template[i] = str_open;
      });
    }
    // Santa tries to move
    if (
      template[santa_location + 1] == str_road ||
      template[santa_location + 1] == str_open
    ) {
      santa_location += 1;
    }
    // Gets new state's string
    const to_print = [...template];
    to_print[santa_location] = str_santa;
    snapshots.push(to_print.join(""));
  }

  return snapshots;
}

console.log(cyberReindeer("S..|...|..", 10));

/* -> result:
[
  'S..|...|..', // initial state
  '.S.|...|..', // sled advances on the road
  '..S|...|..', // sled advances on the road
  '..S|...|..', // sled stops at the barrier
  '..S|...|..', // sled stops at the barrier
  '...S...*..', // barrier opens, sled advances
  '...*S..*..', // sled advances on the road
  '...*.S.*..', // sled advances on the road
  '...*..S*..', // sled advances on the road
  '...*...S..', // passes through the open barrier
]
*/
