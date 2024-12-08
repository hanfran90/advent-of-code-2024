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
  const regex = /mul\(\d{1,3}\,\d{1,3}\)/g;

  const mulMatch = data.match(regex);
  //   console.log(mulMatch);
  sumOfMul(mulMatch);
}

function sumOfMul(mulMatch) {
  //   console.log(mulMatch);

  let arrOfMul = [];
  let regexDigit = /\d{1,3}/g;

  for (let i = 0; i < mulMatch.length; i++) {
    let matches = mulMatch[i].match(regexDigit);
    if (matches) {
      //   console.log(`${matches[0]} * ${matches[1]}`);
      arrOfMul.push(Number(matches[0]) * Number(matches[1]));
    }
    // console.log(arrOfMul);
  }
  const total = arrOfMul.reduce((a, b) => a + b);
  console.log(total);
  return total;
}

readInputFile();
