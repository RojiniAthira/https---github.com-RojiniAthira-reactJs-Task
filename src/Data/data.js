// Sidebar imports
import { UilEstate, UilClipboardAlt, UilChart } from "@iconscout/react-unicons";
import gradeData from "./gradeData.json";

// Logic for calculating CGPA and GPA
function calculateCGPA(sem) {
  var data = [];
  for (var i = 1; i <= parseInt(sem); i++) {
    data.push(
      calculateGPA(
        getGrade(gradeData, i.toString()),
        getCredit(gradeData, i.toString())
      )
    );
  }
  var sum = 0;
  for (var j = 0; j < data.length; j++) {
    sum += parseInt(data[j]);
  }
  var average = sum / data.length;
  return average;
}

function calculateGPA(grade, credit) {
  var creditPoints = new Map();
  var totalPoint = 0;
  var totalCredit = 0;
  creditPoints.set("O", 10);
  creditPoints.set("A+", 9);
  creditPoints.set("A", 8);
  creditPoints.set("B+", 7);
  creditPoints.set("B", 6);
  creditPoints.set("C", 5);
  creditPoints.set("D", 4);
  for (var i = 0; i < grade.length; i++) {
    totalPoint += creditPoints.get(grade[i]) * credit[i];
    totalCredit += credit[i];
  }
  var gpa = totalPoint / totalCredit;
  return gpa.toFixed(2);
}

function getGrade(gradeData, sem) {
  var grade = [];
  for (var i = 0; i < gradeData.length; i++) {
    if (gradeData[i].semester === sem) {
      grade.push(gradeData[i].grade);
    }
  }
  console.log(grade);
  return grade;
}

function getCredit(gradeData, sem) {
  var credit = [];
  for (var i = 0; i < gradeData.length; i++) {
    if (gradeData[i].semester === sem) {
      credit.push(gradeData[i].credits);
    }
  }
  console.log(credit);
  return credit;
}

function getCGPA(sem) {
  var result = [];
  for (var i = 1; i <= sem; i++) {
    result.push(calculateCGPA(i, i.toString()));
  }
  console.log(result);
  return result;
}

function getGPA(sem) {
  var result = [];
  console.log(sem);
  for (var i = 1; i <= sem; i++) {
    console.log(
      i,
      calculateGPA(
        getGrade(gradeData, i.toString()),
        getCredit(gradeData, i.toString())
      )
    );
    result.push(
      calculateGPA(
        getGrade(gradeData, i.toString()),
        getCredit(gradeData, i.toString())
      )
    );
  }
  console.log(result);
  return result;
}

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "CGPA",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: calculateCGPA("10") * 10,
    value: calculateCGPA("10"),
    png: UilClipboardAlt,
    series: [
      {
        name: "CGPA",
        data: getCGPA(10),
      },
    ],
  },
  {
    title: "GPA",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue:
      calculateGPA(getGrade(gradeData, "10"), getCredit(gradeData, "10")) * 10,
    value: calculateGPA(getGrade(gradeData, "10"), getCredit(gradeData, "10")),
    png: UilClipboardAlt,
    series: [
      {
        name: "GPA",
        data: getGPA(10),
      },
    ],
  },
];
