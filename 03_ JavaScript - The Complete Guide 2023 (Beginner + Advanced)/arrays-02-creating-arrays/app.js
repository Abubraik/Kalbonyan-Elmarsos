// // const numbers = [1, 2, 3];
// // console.log(numbers);

// // // const moreNumbers = Array(5, 2);
// // // console.log(moreNumbers);

// // // const yetMoreNumbers = Array.of(1, 2);
// // // console.log(yetMoreNumbers);

// // const listItems = document.querySelectorAll("li");
// // console.log(listItems);

// // const arrayListItems = Array.from(listItems);
// // console.log(arrayListItems);

// // const hobbies = ["Sports", "Cooking"];
// // hobbies.push("Reading");
// // hobbies.unshift("coding");
// // hobbies.pop();
// // console.log(hobbies);

// // hobbies.splice(3, 0, "A");
// // console.log(hobbies);

// // hobbies.splice(5, 4);
// // console.log(hobbies);

// const testResults = [1, 2, 3.4, 2, 53, -10, 3];

// console.log(testResults.lastIndexOf(2));

// const personData = [{ name: "mac" }, { name: "manuel" }];
// console.log(personData.indexOf({ name: "manuel" }));

// const manuel = personData.find((person, idx, persons) => {
//   return person.name === "manuel";
// });
// console.log(personData.indexOf(manuel));

const prices = [10, 15, 2, 4.4, 88];
const tax = 0.14;
const taxAdjuestedprices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

console.log(prices, taxAdjuestedprices);
