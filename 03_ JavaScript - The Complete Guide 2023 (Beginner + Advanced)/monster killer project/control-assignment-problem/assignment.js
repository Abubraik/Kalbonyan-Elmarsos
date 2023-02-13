const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if (randomNumber >= 0.7)
  alert(`randomNumber is greater than 0.7  =>${randomNumber}`);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("----------------------");

for (const ele of arr) {
  console.log(ele);
}

console.log("----------------------");

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
console.log("----------------------");

const Random = Math.random();

if (
  (randomNumber > 0.7 && Random > 0.7) ||
  randomNumber <= 0.2 ||
  Random <= 0.2
)
  alert(`randomNumber and Random is  (${randomNumber},${Random})`);
