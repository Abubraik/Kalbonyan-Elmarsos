const addButton = document.querySelectorAll("button");
const notStartedButton = document.querySelector(".new");
const inProgressButton = document.querySelector(".inProg");
const completedButton = document.querySelector(".comp");
const column = document.querySelectorAll(".column");

column.forEach((el) => {
  el.addEventListener("dragover", (e) => {
    e.preventDefault();
    const nearestElement = notDragging(el, e.clientY);
    const draggable = document.querySelector(".dragging");
    if (nearestElement == null) {
      el.querySelector("ul").appendChild(draggable);
    } else {
      el.querySelector("ul").insertBefore(draggable, nearestElement);
    }
  });
});

const draggable = (e) => {
  e.addEventListener("dragstart", () => {
    e.classList.add("dragging");
  });
  e.addEventListener("dragend", () => {
    e.classList.remove("dragging");
  });
};

const notDragging = (el, y) => {
  const tasks = Array.from(el.querySelectorAll(".draggable:not(.dragging)"));

  tasks.reduce(
    (closest, elements) => {
      const track = elements.getBoundingClientRect();
      const offset = y - track.top - track.height / 2;
      console.log(offset);
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  );
};

const readonly = (e) => {
  e.setAttribute("readonly", "true");
};

const newTask = (status) => {
  const newTask = document.createElement("li");
  newTask.classList.add("task");
  newTask.classList.add("draggable");
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

  draggable(task);
});

inProgressButton.addEventListener("click", (e) => {
  const task = newTask("inProg");
  e.target.parentElement.querySelector(".tasks").append(task);
  const input = e.target.parentElement
    .querySelector(".tasks")
    .lastElementChild.querySelector("input");
  input.focus();
  draggable(task);
});

completedButton.addEventListener("click", (e) => {
  const task = newTask("comp");
  e.target.parentElement.querySelector(".tasks").append(task);
  const input = e.target.parentElement
    .querySelector(".tasks")
    .lastElementChild.querySelector("input");
  input.focus();
  draggable(task);
});
