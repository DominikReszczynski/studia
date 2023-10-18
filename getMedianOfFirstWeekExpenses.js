// wynik dla pojedynczych miesięcy 
// function get_median_of_first_week_expenses(expenses) {
//   for (let month in expenses) {
//       let allExpenses = [];
//       for (let day = 1; day <= 7; day++) {
//           let dayStr = String(day).padStart(2, '0');
//           if (dayStr in expenses[month]) {
//               for (let category in expenses[month][dayStr]) {
//                   allExpenses.push(...expenses[month][dayStr][category]);
//               }
//           }
//       }
//       allExpenses.sort((a, b) => a - b);
//       let median;
//       if (allExpenses.length === 0) {
//           console.log(`No expenses for ${month}.`);
//           continue;
//       } else if (allExpenses.length % 2 === 0) {
//           median = (allExpenses[allExpenses.length / 2 - 1] + allExpenses[allExpenses.length / 2]) / 2;
//       } else {
//           median = allExpenses[(allExpenses.length - 1) / 2];
//       }

//       console.log(`Median for ${month}: ${median}`);
//   }
// }
// let expenses = {
//   "2023-01": {
//       "01": {
//           "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
//           "fuel": [ 210.22 ]
//       },
//       "09": {
//           "food": [ 11.9 ],
//           "fuel": [ 190.22 ]
//       },
//   },
//   "2023-03": {
//       "07": {
//           "food": [ 20, 11.9, 30.20, 11.9 ]
//       },
//       "04": {
//           "food": [ 10.20, 11.50, 2.5 ],
//           "fuel": []
//       }
//   },
//   "2023-04": {}
// };

// get_median_of_first_week_expenses(expenses);


//mediana wszystkich miesięcy 

function get_median_of_first_week_expenses(expenses) {
  let medians = [];
  let medianOfAllMounths;

  for (let month in expenses) {
      let allExpenses = [];
      for (let day = 1; day <= 7; day++) {
          let dayStr = String(day).padStart(2, '0');
          if (dayStr in expenses[month]) {
              for (let category in expenses[month][dayStr]) {
                  allExpenses.push(...expenses[month][dayStr][category]);
              }
          }
      }

      if (allExpenses.length !== 0) {
          allExpenses.sort((a, b) => a - b);
          let median;
          if (allExpenses.length % 2 === 0) {
              median = (allExpenses[allExpenses.length / 2 - 1] + allExpenses[allExpenses.length / 2]) / 2;
          } else {
              median = allExpenses[Math.floor(allExpenses.length / 2)];
          }
          medians.push(median);
      } else {
          medians.push(0);
      }
  }

  medians.sort((a, b) => a - b);
  if (medians.length % 2 !== 0 ) {
    medianOfAllMounths = medians[Math.floor(medians.length/2)]
    console.log(medianOfAllMounths)
  }
  else {
    const first = medians[medians.length/2];
    const second = medians[(medians.length/2)+1];
    medianOfAllMounths = (first + second)/2
  }
  return medianOfAllMounths;
}
let expenses = {
  "2023-01": {
      "01": {
          "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
          "fuel": [ 210.22 ]
      },
      "09": {
          "food": [ 11.9 ],
          "fuel": [ 190.22 ]
      },
  },
  "2023-03": {
      "07": {
          "food": [ 20, 11.9, 30.20, 11.9 ]
      },
      "04": {
          "food": [ 10.20, 11.50, 2.5 ],
          "fuel": []
      }
  },
  "2023-04": {}
};

console.log(get_median_of_first_week_expenses(expenses));

