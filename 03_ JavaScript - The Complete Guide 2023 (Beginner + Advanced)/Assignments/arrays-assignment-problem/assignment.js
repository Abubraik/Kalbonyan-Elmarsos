const arr = [2, 4, 6, 8];

const filtered = arr.filter((val) => {
  return val > 5;
});
console.log(filtered);

const maped = arr.map((val, idx) => {
  const num = { index: idx, value: val };
  return num;
});
console.log(maped);

const reduced = arr.reduce((prev, curr) => prev * curr);
console.log(reduced);

const findMax = (...args) => {
  let max = Number.MIN_SAFE_INTEGER;
  args.forEach((val) => (max = max > val ? max : val));
  return max;
};
console.log(findMax(...arr));

const findMinMax = (...args) => {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  args.forEach((val) => (max = max > val ? max : val));
  args.forEach((val) => (min = min < val ? min : val));
  return [min, max];
};
console.log(findMinMax(...arr));

const [minValue, maxValue] = findMinMax(...arr);
console.log(minValue, maxValue);

const list = new Set();
list.add("A");
list.add("A");
list.add("B");

console.log(list);
