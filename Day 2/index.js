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
  const reports = data
    .trim()
    .split("\n")
    .map((level) => level.trim().split(" ").map(Number));

  const safeCount = findSafeReports(reports);
  const dampenerSafeCount = countReportsProblemDampener(reports);

  console.log("Safe reports:", safeCount);
  console.log("Safe reports with Problem Dampener:", dampenerSafeCount);
}

function isReportSafe(report) {
  if (report.length < 2) return false;
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 0; i < report.length; i++) {
    const difference = report[i + 1] - report[i];

    if (Math.abs(difference) < 1 || Math.abs(difference) > 3) {
      return false;
    }

    if (difference > 0) isDecreasing = false;
    if (difference < 0) isIncreasing = false;
  }
  return isIncreasing || isDecreasing;
}

function findSafeReports(reports) {
  return reports.filter(isReportSafe).length;
}

function countReportsProblemDampener(reports) {
  let dampenerSafeCount = 0;

  for (const report of reports) {
    if (isReportSafe(report)) {
      dampenerSafeCount++;
      continue;
    }

    for (let i = 0; i < report.length; i++) {
      const modifyReport = report.slice(0, i).concat(report.slice(i + 1));
      if (isReportSafe(modifyReport)) {
        dampenerSafeCount++;
        break;
      }
    }
  }
  console.log(dampenerSafeCount);
  return dampenerSafeCount;
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

//part 2
//problem dampener
//removing a single level in the report makes it safe... then it would class as safe
//
