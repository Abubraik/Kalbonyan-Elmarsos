const task3Element = document.getElementById("task-3");

function greet() {
  alert("HII!!");
}

function greetName(name) {
  alert(`HII! ${name}`);
}

greet();
greetName("Abdullah");

task3Element.addEventListener("click", greet);

function concat(str1, str2, str3) {
  return str1 + str2 + str3;
}

alert(concat("Ali", "Marwa", "Ola"));
