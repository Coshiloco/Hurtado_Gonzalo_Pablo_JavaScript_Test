/*
I cannot use the import dynamic as it should be done because of the browser's Same-Origin policy.
This policy restricts how a document or script loaded from one origin can interact with a resource from another origin.
This is a major security measure implemented by web browsers to prevent Cross-Site Request Forgery
or other types of security attacks.
*/

/*import {
  F11,
  F12,
} from "../hurtado_pablo_test_javascript_algo_ex1/hurtado_pablo_test_javascript_algo_ex1.js";*/

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

// Use cases where F21 returns true

let A1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(F21(A1)); // Should return true

//let A2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
//console.log(F21(A2)); // Should return true

//let A3 = [2, 1, 4, 3, 6, 5, 8, 7, 9];
//console.log(F21(A3)); // Should return true

// Use cases where F21 returns false

//let A4 = [1, 2, 3, 4, 5, 6, 7, 8, 8]; // Duplicate number
//console.log(F21(A4)); // Should return false

//let A5 = [1, 2, 3, 4, 5, 5, 7, 8, 9]; // Duplicate number
//console.log(F21(A5)); // Should return false

//let A6 = [1, 2, 3, 4, 5, 6, 7, 8]; // Missing a number
//console.log(F21(A6)); // Should return false

// Now let's use F11 and F12 from Exercise 1 with the array A1

F11(A1.flatMap((x) => Array(9).fill(x))); // This should create a 9x9 table with each row filled with the same number
F12(); // This should display the 9x9 table
