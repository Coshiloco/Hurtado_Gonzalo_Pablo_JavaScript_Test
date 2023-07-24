/*
I cannot use the import dynamic as it should be done because of the browser's Same-Origin policy.
This policy restricts how a document or script loaded from one origin can interact with a resource from another origin.
This is a major security measure implemented by web browsers to prevent Cross-Site Request Forgery
or other types of security attacks.
*/

/*import {
  F11,
  F12,
} from "../hurtado_pablo_test_javascript_algo_ex1/hurtado_pablo_test_javascript_algo_ex1.js";
import { F21 } from "../hurtado_pablo_test_javascript_algo_ex2/hurtado_pablo_test_javascript_algo_ex2.js";*/

let to_verify = new Array(9);
let errorOccurred = false;
for (let i = 0; i < 9; i++) {
  to_verify[i] = new Array(9).fill(0);
}

// F11 function reads the provided one-dimensional table and transfers it to "to_verify"
function F11(table_digits) {
  if (table_digits.length !== 81) {
    errorOccurred = true;
    document.body.innerHTML +=
      "<p>Error: table_digits must have 81 elements.</p>";
    return;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      to_verify[i][j] = table_digits[i * 9 + j];
    }
  }

  document.body.innerHTML += "<p>Table successfully transferred.</p>";
}

// F12 function displays the content of "to_verify"
function F12() {
  if (errorOccurred) {
    document.body.innerHTML +=
      "<p>Error: Provided table does not have 81 elements.</p>";
    return;
  }

  let tableHTML = "<table>";
  for (let i = 0; i < 9; i++) {
    tableHTML += "<tr>";
    for (let j = 0; j < 9; j++) {
      tableHTML += "<td>" + to_verify[i][j] + "</td>";
    }
    tableHTML += "</tr>";
  }
  tableHTML += "</table>";
  document.body.innerHTML += "Table to verify:<br>" + tableHTML;
}

// F21 function accepts an array "A" with 9 elements
function F21(A) {
  // Check the length of the array
  if (A.length !== 9) {
    document.body.innerHTML += "<p>Error: Array must have 9 elements.</p>";
    return false;
  }

  // Create an object to keep track of the numbers
  let numbersSeen = {};

  // Iterate through the array
  for (let i = 0; i < 9; i++) {
    let num = A[i];

    // Check that the number is an integer between 1 and 9
    if (!Number.isInteger(num) || num < 1 || num > 9) {
      document.body.innerHTML +=
        "<p>Error: All elements must be integers from 1 to 9.</p>";
      return false;
    }

    // Check that the number hasn't been seen before
    if (numbersSeen[num]) {
      document.body.innerHTML +=
        "<p>Error: All elements must be different.</p>";
      return false;
    }

    // Mark the number as seen
    numbersSeen[num] = true;
  }

  document.body.innerHTML += "<p>The array is valid.</p>";

  // Return true if the array is valid, false otherwise
  return true;
}

// F31 function checks each row of the "to_verify" table
function F31() {
  for (let i = 0; i < 9; i++) {
    if (!F21(to_verify[i])) {
      document.body.innerHTML += `Row ${i + 1} incorrect: ${to_verify[i].join(
        " "
      )}<br>`;
    }
  }
}

// F32 function checks each column of the "to_verify" table
function F32() {
  for (let i = 0; i < 9; i++) {
    let column = to_verify.map((row) => row[i]);
    if (!F21(column)) {
      document.body.innerHTML += `Column ${i + 1} incorrect: ${column.join(
        " "
      )}<br>`;
    }
  }
}

// F33 function checks each region of the "to_verify" table
function F33() {
  for (let region = 0; region < 9; region++) {
    let regionStartRow = Math.floor(region / 3) * 3;
    let regionStartCol = (region % 3) * 3;
    let regionValues = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        regionValues.push(to_verify[regionStartRow + i][regionStartCol + j]);
      }
    }
    if (!F21(regionValues)) {
      document.body.innerHTML += `Region ${
        region + 1
      } incorrect: ${regionValues.join(" ")}<br>`;
    }
  }
}

let table_digits = [
  4, 9, 5, 2, 7, 3, 6, 8, 1, 6, 6, 3, 9, 4, 8, 7, 5, 2, 8, 2, 7, 5, 6, 1, 4, 3,
  9, 7, 6, 1, 8, 2, 4, 5, 9, 3, 9, 5, 8, 6, 3, 7, 2, 1, 4, 2, 3, 4, 1, 5, 9, 8,
  6, 7, 1, 7, 9, 4, 8, 5, 3, 2, 6, 3, 8, 2, 7, 9, 6, 1, 4, 5, 5, 4, 6, 3, 1, 2,
  9, 7, 8,
];

// Execute the functions via the HTML file "Main"
F11(table_digits); // Transfer the one-dimensional table to the "to_verify" table
F12(); // Display the "to_verify" table as an HTML table
F31(); // Check each row of the "to_verify" table
F32(); // Check each column of the "to_verify" table
F33(); // Check each region of the "to_verify" table
