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

const readonly = (e) => {
  e.setAttribute("readonly", "true");
};

const newTask = (status) => {
  const newTask = document.createElement("li");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.classList.add(status);
  newTask.innerHTML = `
  <input type="text" class="taskinp"/>
  <ion-icon name="create" class="edit"></ion-icon>
  <ion-icon name="trash" class="delete"></ion-icon>
`;

  //delete event
  newTask.querySelector(".delete").addEventListener("click", (e) => {
    const parent = e.target.parentElement;
    parent.remove(e.target);
  });

  //edit event
  newTask.querySelector(".edit").addEventListener("click", (e) => {
    const text = e.target.previousElementSibling;
    console.log(text);
    text.removeAttribute("readonly");
    text.focus();
  });

  //input events
  const input = newTask.querySelector("input");

  input.addEventListener("focusout", () => readonly(input));
  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      readonly(input);
    }
  });
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
