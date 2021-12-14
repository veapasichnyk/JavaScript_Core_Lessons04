class Student {
    constructor(yearOfStuding, facultyName) {
        this.yearOfStuding = yearOfStuding;
        this.facultyName = facultyName;
    }
}
let students = [
    new Student(1, "First"),
    new Student(2, "Second"),
    new Student(4, "First"),
    new Student(4, "Fourth"),
    new Student(5, "Second"),
    new Student(4, "Fifth"),
    new Student(1, "Third"),
    new Student(3, "Fourth"),
    new Student(4, "Third"),
    new Student(2, "Fifth")
];

let facultyNames = students.map(e => e.facultyName);
console.log(facultyNames);

let sum = students.reduce((a, b) => a + b.yearOfStuding, 0);
console.log(sum);