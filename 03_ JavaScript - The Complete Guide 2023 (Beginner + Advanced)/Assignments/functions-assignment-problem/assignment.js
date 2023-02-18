function sayHello(name) {
  console.log("Hi " + name);
}

const sayHelloArrow = (name = "Abdullah") => console.log("Hi " + name);
sayHello("ali");
sayHelloArrow("ali");

const sayHelloArrow2 = (statement = "Hi", name = "Mona") =>
  console.log(`${statement} ${name}`);
sayHelloArrow2("Hi", "Ahmed");

const sayHelloArrow3 = () => console.log("Hi Khaled");
sayHelloArrow3();

const sayHelloArrow4 = () => "Hi, BROO";

const checkInput = (emptyArgs, ...args) => {
  if (args.length === 0) emptyArgs();

  for (const ele of args) {
    if (ele.length === 0) emptyArgs();
    else console.log(ele);
  }
};

const emptyArgs = () => console.log("empty!");
checkInput("");
