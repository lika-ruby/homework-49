const checkAnswer = (answer) => (answer ? true : false);
const printMessage = function (checkAnswer) {
  checkAnswer(answer);
  if (checkAnswer(answer) === true) {
    return "Hello World!";
  } else {
    return "";
  }
};

alert("Task 1");
const answer = confirm("Виберіть кнопку");
console.log(answer);
alert(printMessage(checkAnswer));

//////////////////////////////////////////////////////////////

const generateRandomNumber = () => Math.round(Math.random() * (100 - 1) + 1);

const checkNumber = (personNumber) =>
  personNumber > 0 && personNumber < 101 ? true : false;

const checkPersonAndRandomNumbers = function (
  generateRandomNumber,
  checkNumber,
  personNumber
) {
  generateRandomNumber();
  checkNumber(number);
  if (checkNumber(number) === false) {
    return "Ви ввели число не від 1 до 100";
  }
  if (personNumber === generateRandomNumber()) {
    return `Ви вгадали, загадане число дорівнює ${generateRandomNumber()}, а ви ввели ${personNumber}`;
  } else {
    return `Ви не вгадали, загадане число дорівнює ${generateRandomNumber()}, а ви ввели ${personNumber}`;
  }
};

alert("Task 2");
const number = prompt("Введіть число від 1 до 100");
alert(checkPersonAndRandomNumbers(generateRandomNumber, checkNumber, number));

//////////////////////////////////////////////////////////////

let countOfClicks = 0;
const outputChoice = function (checkAnswer2, countClicks) {
  let click = "";
  do {
    click = confirm("Натисніть на кнопку");
    checkAnswer2(click);
    if (checkAnswer2(click)) {
      countClicks();
    }
  } while (click === true);
  return `Ви натиснули на "OK" ${countOfClicks} разів`;
};

const checkAnswer2 = (click) => (answer ? true : false);

const countClicks = () => (countOfClicks += 1);

alert("Task 3");

alert(outputChoice(checkAnswer2, countClicks));

//////////////////////////////////////////////////////////////

const squareUp = (number) => (number *= number);

const applyCallbackToEachElement = function (arr, callback) {
  const squareArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    squareArr.push(callback(arr[i]));
  }
  return `При вихідному масиві ${arr}, ми отримали масив ${squareArr}`;
};

alert("Task 4");
const arr = [1, 2, 3, 4, 5];

alert(applyCallbackToEachElement(arr, squareUp));

//////////////////////////////////////////////////////////////

const calculateDiscountedPrice = (price, discount, callback) =>
  callback((price / 100) * (100 - discount));

const showDiscountedPrice = (totalPrice) => `До сплати ${totalPrice}`;

alert("Task 5");
const price = prompt("Введіть вартість товару");
const discount = prompt("Введіть знижку");

console.log(calculateDiscountedPrice(price, discount, showDiscountedPrice));
