"use strict";

function Student(name, marks) {
  this.fullName = name;
  this.listMarks = marks;
  this.averageMark = function() {
    return this.listMarks.reduce((acc, current) => acc + current);
  };
  this.minMark = function() {
    return Math.min.apply(Math, this.listMarks); //#1 apply
  };
  this.maxMark = function() {
    return Math.max(...marks); //#2 spread
  };
  this.sMarks = marks.length;
}

const group = [
  new Student("John", [3, 9, 12, 3, 4]),
  new Student("Jack", [2, 4, 6])
];

// add
group.forEach(element => {
  const groupMarksSum = element.listMarks.reduce(
    (acc, current) => acc + current
  );
  return groupMarksSum;
});




//////
console.log(group);
const test = group[0].minMark();
const test2 = group[0].maxMark();
const test3 = group[1].minMark();
const test4 = group[1].maxMark();
const averageA = group[0].sMarks;
const averageB = group[1].sMarks;

console.log(group);
console.log(test);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(averageA);
console.log(averageB);