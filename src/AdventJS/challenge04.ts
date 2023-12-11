function decode(message: string): string {
  const [_index, group] = parse(message);
  return group.join("");

  function parse(s: string): [number, string[]] {
    let group: string[] = [];
    let index = 0;
    while (index < s.length) {
      if (s[index] === "(") {
        const [index_shift, new_group] = parse(s.slice(index + 1));
        index += index_shift + 1;
        group = group.concat(new_group);
      } else if (s[index] === ")") {
        return [index, group.reverse()];
      } else {
        group.push(s[index]);
      }
      index += 1;
    }
    return [index, group];
  }
}

console.log(decode("hola (odnum)"), "hola mundo");
console.log(decode("(olleh) (dlrow)!"), "hello world!");
console.log(decode("sa(u(cla)atn)s"), "santaclaus");
