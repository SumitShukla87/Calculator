function add(numbers) {
  if (numbers === '') return 0;

  if (numbers.startsWith('//')) {
    const delimiterIndex = numbers.indexOf('\n');
    const delimiter = numbers.slice(2, delimiterIndex);
    numbers = numbers.slice(delimiterIndex + 1);

    const numArray = numbers.split(delimiter).map(num => parseInt(num));
    return numArray.reduce((sum, num) => sum + num, 0);
  }

  const numArray = numbers.split(/[\n,]/).map(num => parseInt(num));
  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
