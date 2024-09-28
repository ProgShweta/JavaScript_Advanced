// const nameAndNumberList = [
//     ['Adarsh', 75],
//     ['Akash', 90],
//     ['Anurag', 9],
//   ]
  
//   const ticTacToe = [
//       ['X', null, null],
//       [null, null, 'O'],
//       ['O', null, 'X']
//   ]

const nameAndNumber = [
    ['shweta',75],
    ['chhoti', 15],
    ['shreya',9]
]
// console.log(nameAndNumber[0]) //['shweta',75],
// console.log(nameAndNumber[1])//['chhoti', 15],
// console.log(nameAndNumber[2])['shreya',9]

// console.log(nameAndNumber[2][0]);
// console.log(nameAndNumber[2][1]);

const tictac= [
    ['x',null,null],
    [null,null,'o'],
    ['o',null,'x']
]
// console.log(tictac);
const nestedArray = [
    [[1, 2], 3, 4],
    [5, [6, 7], 8],
    [9, 10, [11, 12]],
  ];
  
  // Access and print innermost arrays
  console.log(nestedArray[0][0].join(', '));  // Output: 1, 2
  console.log(nestedArray[1][1].join(', '));  // Output: 6, 7
  console.log(nestedArray[2][2]);  // Output: [11, 12]