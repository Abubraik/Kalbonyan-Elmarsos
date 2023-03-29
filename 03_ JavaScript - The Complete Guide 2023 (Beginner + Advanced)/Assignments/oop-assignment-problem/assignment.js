// #1

class Course {
  #price;
  get price() {
    return this.#price + "$";
  }
  set price(value) {
    if (value >= 0) this.#price = value;
    else throw "Invalid value";
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }
  // #2

  calculateLength(amountPaid) {
    const unit = this.length / parseFloat(this.price.slice(0, -1));

    return amountPaid * unit;
  }

  summary() {
    return `This is a complete course for ${this.title} language with ${this.length} hours with best practices`;
  }
}

const course1 = new Course("C#", 2, 10);
const course2 = new Course("C++", 4, 20);
console.log(course1, course2);

console.log(course1.calculateLength(5), course2.calculateLength(10));
console.log(course1.summary(), course2.summary());

// #3

class PracticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
    this.numOfExercises = 13;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }
  publish() {
    console.log("Piblishing ... ");
  }
}

const practicalCourse = new PracticalCourse("Java", 20, 10);
const theoreticalCourse = new TheoreticalCourse("Kotlin", 30, 20);

console.log(
  practicalCourse.calculateLength(5),
  theoreticalCourse.calculateLength(10)
);
console.log(practicalCourse.summary(), theoreticalCourse.summary());

console.log(practicalCourse.numOfExercises);
console.log(theoreticalCourse.publish());
