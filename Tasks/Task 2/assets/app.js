const addButton = document.querySelectorAll("button");

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

const newTask = (status) => {
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.classList.add(status);
  newTask.innerHTML = `
  <input type="text" class="taskinp"/>
  <ion-icon name="create" class="edit"></ion-icon>
  <ion-icon name="trash" class="delete"></ion-icon>
`;
  newTask.querySelector(".delete").addEventListener("click", (e) => {
    const parent = e.target.parentElement;
    parent.remove(e.target);
  });

  newTask.querySelector(".edit").addEventListener("click", (e) => {
    const text = e.target.previousElementSibling;
    console.log(text);
    text.removeAttribute("readonly");
    text.focus();
  });

  const input = newTask.querySelector("input");
  input.addEventListener("focusout", () =>
    input.setAttribute("readonly", "true")
  );
  return newTask;
};

notStartedButton.addEventListener("click", (e) => {
  const task = newTask("new");
  e.target.parentElement.querySelector(".tasks").append(task);
  const input = e.target.parentElement
    .querySelector(".tasks")
    .lastElementChild.querySelector("input");
  input.focus();
});

inProgressButton.addEventListener("click", (e) => {
  const task = newTask("inProg");
  e.target.parentElement.querySelector(".tasks").append(task);
  const input = e.target.parentElement
    .querySelector(".tasks")
    .lastElementChild.querySelector("input");
  input.focus();
});

completedButton.addEventListener("click", (e) => {
  const task = newTask("comp");
  e.target.parentElement.querySelector(".tasks").append(task);
  const input = e.target.parentElement
    .querySelector(".tasks")
    .lastElementChild.querySelector("input");
  input.focus();
});
