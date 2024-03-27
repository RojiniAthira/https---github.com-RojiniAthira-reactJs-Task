// Sidebar imports
import { UilEstate, UilClipboardAlt, UilChart } from "@iconscout/react-unicons";
import gradeData from "./gradeData.json";

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
    barValue: 70,
    value: 7.0,
    png: UilClipboardAlt,
    series: [
      {
        name: "CGPA",
        data: [7.8, 8.2, 7.9, 9.0, 10, 7.8, 8.2, 7.9, 9.0, 10],
      },
    ],
  },
  {
    title: "GPA",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 100,
    value: 10,
    png: UilClipboardAlt,
    series: [
      {
        name: "GPA",
        data: [7.8, 8.2, 7.9, 9.0, 10, 7.8, 8.2, 7.9, 9.0, 10],
      },
    ],
  },
];

function calculateCGPA(sem) {
  var data = [];
  for (var i = 1; i <= sem; i++) {
    data.push(
      calculateGPA(getGrade(gradeData, sem), getCredit(gradeData, sem))
    );
  }
  var sum = 0;
  for (var j = 0; j < data.length; j++) {
    sum += data[j];
  }
  var average = sum / data.length;
  console.log(average);
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
  for (var i = 0; i < grade.length; i++) {
    totalPoint += creditPoints.get(grade[i]) * credit[i];
    totalCredit += credit[i];
    console.log(creditPoints.get(grade[i]));
  }
  console.log(totalCredit);
  console.log(totalPoint);
  var gpa = totalPoint / totalCredit;
  console.log(gpa.toFixed(2));
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

calculateCGPA("2");
