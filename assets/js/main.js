// - level 1_8 slice

const destinations = [
  "Schweden",
  "Portugal",
  "Spanien",
  "Norwegen",
  "Schottland",
  "Italien",
];
// Ursprung
console.log(destinations);
// Kopie mit slice
console.log(destinations.slice());
// die ersten beiden Werte fehlen
console.log(destinations.slice(2));
// nur Spanien und Norwegen werden ausgegeben
console.log(destinations.slice(2, 4));

// - level 1_1 sort

let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

function sortierung() {
  console.log(languages.sort());
}
sortierung();

// - level 1_2 sort

function sortierung2() {
  console.log(languages.sort().reverse());
}
sortierung2();

// -level 1_3 sort

let numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

function callBackFn(a, b) {
  return a - b;
}
console.log(numArray1.sort(callBackFn));

// - level 2_2 sort

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

function callBackFn2(a, b) {
  return a - b;
}
console.log(numArray2.sort(callBackFn2));

//* rückwärts sortiert:

function callBackFnReverse(a, b) {
  return b - a;
}
console.log(numArray2.sort(callBackFnReverse));

// - level 1_1 forEach()

let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

function myDrinks() {
  getraenke.sort();
}

myDrinks();

getraenke.forEach((singleDrink) => console.log(singleDrink));
getraenke.forEach((singleDrink) => document.write(`${singleDrink} <br>`));

// - level 1_2 map

const upperDrinks = getraenke.map((singleDrink) => singleDrink.toUpperCase());
console.log(upperDrinks);

// - level 1_3

let array = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

const array2 = array
  .map((singleArray) => singleArray * 2)
  .sort((a, b) => a - b);

console.log(array2);

// - level 1_4

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const celsius = fahrenheit.map((fh) => ((fh - 32) / 1.8).toFixed(2));
console.log(celsius);

// - level 1_5

let checkNumber = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

const number = checkNumber.map((num) => {
  if (num % 3 === 0) {
    return num + 100;
  } else {
    return num;
  }
});

console.log(number);

// - level 1_6

let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

const song = album.map((titel) => {
  if (titel.includes(".")) {
    return titel.slice(0, titel.indexOf(".")).toLowerCase();
  } else {
    return "invalid";
  }
});

console.log(song);
