
console.log("===== Exercise 1: Addition =====");

const number1 = 10;
const number2 = 20;
const sum = number1 + number2;

console.log("Sum:", sum);


console.log("===== Exercise 2: Even or Odd =====");

const number = 7;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}


console.log("===== Exercise 3: For Loop =====");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


console.log("===== Exercise 4: Array Sum =====");

const numbers = [10, 20, 30, 40, 50];
let total = 0;

for (const item of numbers) {
    total = total + item;
}

console.log("Total:", total);


console.log("===== Exercise 5: Filter Even Numbers =====");

const values = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = values.filter(function (value) {
    return value % 2 === 0;
});

console.log("Even numbers:", evenNumbers);


console.log("===== Exercise 6: Student Object =====");

const student = {
    name: "Anjali",
    age: 22,
    marks: 85
};

console.log("Name:", student.name);
console.log("Marks:", student.marks);


console.log("===== Exercise 7: Add Numbers Function =====");

function addNumbers(a, b) {
    return a + b;
}

console.log("Result:", addNumbers(15, 25));


console.log("===== Exercise 8: Largest Number =====");

function findLargest(a, b, c) {
    return Math.max(a, b, c);
}

console.log("Largest number:", findLargest(12, 45, 30));


console.log("===== Exercise 9: DOM Text Change =====");

const heading = document.getElementById("heading");

if (heading) {
    heading.textContent = "JavaScript is working!";
}


console.log("===== Exercise 10: Button Click =====");

const message = document.getElementById("message");
const button = document.getElementById("changeButton");

if (message && button) {
    button.addEventListener("click", function () {
        message.textContent = "Button clicked successfully!";
    });
}

