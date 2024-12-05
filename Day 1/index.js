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
  const rows = data.split("\n");
  const splitRows = rows.map((row) => row.split("   "));

  const leftItems = splitRows
    .map(([leftItem]) => Number(leftItem))
    .sort((a, b) => a - b);

  const rightItems = splitRows
    .map(([, rightItem]) => Number(rightItem))
    .sort((a, b) => a - b);

  return (
    totalDistance(leftItems, rightItems), similarityScore(leftItems, rightItems)
  );
}

function totalDistance(leftItems, rightItems) {
  const distances = [];

  for (let i = 0; i < leftItems.length; i++) {
    const leftNum = leftItems[i];
    const rightNum = rightItems[i];

    const distance = Math.abs(leftNum - rightNum);
    distances.push(distance);
  }
  return sumOfDistances(distances);
}

function sumOfDistances(distances) {
  let sum = 0;

  for (let i = 0; i < distances.length; i++) {
    sum += distances[i];
  }
  console.log(sum);
  return sum;
}

function similarityScore(leftItems, rightItems) {
  let similarity = [];

  for (let i = 0; i < leftItems.length; i++) {
    const leftItem = leftItems[i];
    let countNumber = 0;

    for (let j = 0; j < rightItems.length; j++) {
      const rightItem = rightItems[j];

      if (leftItem === rightItem) {
        countNumber++;
      }
    }
    similarity.push(leftItem * countNumber);
  }
  let totalSimilarity = 0;

  for (let k = 0; k < similarity.length; k++) {
    totalSimilarity += similarity[k];
  }

  console.log(totalSimilarity);
  return totalSimilarity;
}
readInputFile();

//Part 1
//readfile
//split numbers on new line
//split numbers on row left and right
//map the numbers l/r and turn to a number and then sort in ascending order
//need to compare each number in order
//map through each array, use index number to then compare?
//difference between each equals the distance
//need to add up all the distances and that will be the answer
//total distance between the lists

//Part 2
//location Id's appear in both lists
//how often a number a number that is in the left list also appears in the right list
//similarity list = leftNum * amountOfTimesItAppearsInTheRight
//new array of numbers
//sum numbers up
