// Initialize 9x9 "to_verify" table
let to_verify = new Array(9);
let errorOccurred = false;
for (let i = 0; i < 9; i++) {
  to_verify[i] = new Array(9).fill(0);
}

// F11 function reads the provided one-dimensional table and transfers it to "to_verify"
function F11(table_digits) {
  if (table_digits.length !== 81) {
    errorOccurred = true;
    document.body.innerHTML = "Error: table_digits must have 81 elements.";
    return;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      to_verify[i][j] = table_digits[i * 9 + j];
    }
  }

  document.body.innerHTML = "Table successfully transferred.";
}

// F12 function displays the content of "to_verify"
function F12() {
  if (errorOccurred) {
    document.body.innerHTML =
      "Error: Provided table does not have 81 elements.";
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
  document.body.innerHTML = "Table to verify:<br>" + tableHTML;
}

let table_digits = [
  4, 9, 5, 2, 7, 3, 6, 8, 1, 6, 1, 3, 9, 4, 8, 7, 5, 2, 8, 2, 7, 5, 6, 1, 4, 3,
  9, 7, 6, 1, 8, 2, 4, 5, 9, 3, 9, 5, 8, 6, 3, 7, 2, 1, 4, 2, 3, 4, 1, 5, 9, 8,
  6, 7, 1, 7, 9, 4, 8, 5, 3, 2, 6, 3, 8, 2, 7, 9, 6, 1, 4, 5, 5, 4, 6, 3, 1, 2,
  9, 7, 8,
]; // example of a one-dimensional table
let table_digits_test_2 = Array(81).fill(0);
let table_digits_test_3 = Array.from({ length: 81 }, (_, i) => i + 1);
let table_digits_test_4 = Array.from({ length: 81 }, () =>
  Math.floor(Math.random() * 10)
);

// Use cases where condition checking is met

F11(table_digits); // transfer the one-dimensional table to the "to_verify" table
F12(); // display the "to_verify" table as an HTML table

//F11(table_digits_test_2);
//F12();

//F11(table_digits_test_3);
//F12();

//F11(table_digits_test_4);
//F12();

// Use cases where condition checks are not met

let table_digits_test_5 = Array(80).fill(0);

let table_digits_test_6 = Array(82).fill(0);

let table_digits_test_8 = undefined;

//F11(table_digits_test_5);
//F12();

//F11(table_digits_test_6);
//F12();

//F11(table_digits_test_8);
//F12();
