import { F11, F12 } from "./hurtado_pablo_test_javascript_algo_ex1.js";
import { F21 } from "./hurtado_pablo_test_javascript_algo_ex2.js";

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
