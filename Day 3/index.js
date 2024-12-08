const fs = require("fs");

function readInputFile() {
  fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
      return console.log("Error reading file");
    }
    findMultiples(data);
  });
}

function findMultiples(data) {
  const regex = /^mul\(\d{1,3},\d{1,3}\)$/;
  const regex1 = /(do\(\)|don't\(\)|mul\(\d{1,3},\d{1,3}\))/g;
  const mulMatch = data.match(regex1);

  let enabled = true;
  let allMultiples = [];
  let validMultiples = [];

  mulMatch.forEach((instruction) => {
    if (instruction === "do()") {
      enabled = true; 
    } else if (instruction === "don't()") {
      enabled = false; 
    } else if (regex.test(instruction)) {
      allMultiples.push(instruction);

      if (enabled) {
        validMultiples.push(instruction);
      }
    }
  });

  sumOfAllMultiples(allMultiples); 
  sumOfValidMultiples(validMultiples);
}

function sumOfAllMultiples(allMultiples) {
  let arrOfAllMul = [];
  let regexDigit = /\d{1,3}/g;

  for (let i = 0; i < allMultiples.length; i++) {
    let matches = allMultiples[i].match(regexDigit);
    if (matches) {
      arrOfAllMul.push(Number(matches[0]) * Number(matches[1]));
    }
  }
  const total = arrOfAllMul.reduce((a, b) => a + b, 0);
  console.log("Total of all mul:", total);
  return total;
}

function sumOfValidMultiples(validMultiples) {
  let arrOfValidMul = [];
  let regexDigit = /\d{1,3}/g;

  for (let i = 0; i < validMultiples.length; i++) {
    let matches = validMultiples[i].match(regexDigit);
    if (matches) {
      arrOfValidMul.push(Number(matches[0]) * Number(matches[1]));
    }
  }
  const total = arrOfValidMul.reduce((a, b) => a + b, 0);
  console.log("Total of enabled mul:", total);
  return total;
}

readInputFile();

// Total of all mul: 173785482
// Total of enabled mul: 83158140