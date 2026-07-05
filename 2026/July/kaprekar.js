function kaprekar(num) {
  let count = 0;

  while (num !== 6174) {
    const digits = num.toString().padStart(4, "0").split("");

    const asc = Number([...digits].sort().join(""));
    const desc = Number([...digits].sort().reverse().join(""));

    num = desc - asc;
    count++;
  }

  return count;
}