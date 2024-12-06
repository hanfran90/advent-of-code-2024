const fs = require("fs");

function readInputFile() {
  fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
      return console.log("Error reading file");
    }
    fileContent(data);
  });
}

function fileContent(data) {
  const row = data.split("\n");
  //   console.log(reports);

  const reports = row.map((report) => {
    return report.split(" ").map((item) => Number(item));
  });
  //   console.log(reports);
  findSafeReports(reports);
}

function findSafeReports(reports) {
  let safeCount = 0;

  for (let i = 0; i < reports.length; i++) {
    let reportI = reports[i];
    let isSafe = true;
    let isIncreasing = true;
    let isDecreasing = true;

    for (let j = 0; j < reportI.length - 1; j++) {
      let difference = reportI[j + 1] - reportI[j];

      if (Math.abs(difference) < 1 || Math.abs(difference) > 3) {
        isSafe = false;
        break;
      }
      if (difference > 0) isDecreasing = false;
      if (difference < 0) isIncreasing = false;
    }
    if (isSafe && (isIncreasing || isDecreasing)) {
      safeCount++;
    }
  }
  console.log(safeCount);
}
readInputFile();




//part 1
// one report per line
//each report, list of numbers, called levels, separated by spaces
//safe = if all levels increasing or decreasing and levels differ by at least 1 <= 3
//unsafe = non of the above or number stays the same

//read file and get data
// split content into reports
// put each report in an array
//compare each number with the next with given conditions
// next number should not increase or decrease more than 3
//if reach end of array then safecount +1
//if not don't count
//return count of safe reports
