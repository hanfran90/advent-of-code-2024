const fs = require("fs");

function readInputFile() {
  fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
      return console.log("Error reading file");
    }
    findXmas(data);
  });
}

function findXmas(data) {
  let xmasArray = [];

  for (let i = 0; i < data.length - 4; i++) {
    if (
      data[i] === "X" &&
      data[i + 1] === "M" &&
      data[i + 2] === "A" &&
      data[i + 3] === "S"
    ) {
      xmasArray.push("XMAS");
    }
  }
  console.log(xmasArray);
}

readInputFile();

//horizontal left and/or right
//vertical up or down
//diagonal both directions and backwards and forwards?
//overlapping other words??

//need some kind of grid system?
//
