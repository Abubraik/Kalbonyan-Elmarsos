const addButton = document.querySelectorAll("button");
console.log(addButton);

// addButton.forEach(() => {
//   addEventListener("click", (e) => {
//     console.log(e.target.parentElement.firstElement.textContent);
//   });
// });

// for (const btn of addButton) {
//   addEventListener("click", () => {
//     console.log(btn.parentElement);
//   });
// }

const notStartedButton = document.querySelector(".new");
const inProgressButton = document.querySelector(".inProg");
const completedButton = document.querySelector(".comp");

notStartedButton.addEventListener("click", (e) => {
  const newTask = document.createElement("input");
  newTask.classList.add("task");
  newTask.innerHTML = `
  <div class="input">
  <input type="text" class="task" />
  <ion-icon name="create" class="edit"></ion-icon>
  <ion-icon name="trash" class="delete"></ion-icon>
</div>`;
  e.target.before(newTask);
  newTask.focus();
});

inProgressButton.addEventListener("click", (e) => {
  const newTask = document.createElement("input");
  newTask.classList.add("task");
  e.target.before(newTask);
  newTask.focus();
});

completedButton.addEventListener("click", (e) => {
  const newTask = document.createElement("input");
  newTask.classList.add("task");
  e.target.before(newTask);
  newTask.focus();
});
