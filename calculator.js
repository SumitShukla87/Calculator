function add(numbers) {
  if (numbers === "") return 0;
  if (!numbers.includes(",") && !numbers.includes("\n")) {
    return parseInt(numbers);
  }

  const numArray = numbers.split(/[\n,]/).map((num) => parseInt(num));
  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
