console.log('Program Start')


// for(let i = 0; i <= 10; i++) {
//     if(i % 2 === 0) {
//         console.log(i); 
//     }
// }
// debugger
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }


// const friends = ['shreya','lakshmi', 'shweta','chhoti']
// const lastName = ' chaudhary'
// for(let i = 0; i<friends.length; i++){
//     console.log(`${i+1}. ${friends[i]}`. concat(lastName));
// }

//print even no.

// for(let i = 0; i <= 10; i++)
// {
//     if(i%2 == 0){
//         console.log(i);
//     }
// }
let sum = 0
for(let i = 1 ; i<= 1000; i++){
   sum = sum + i;
   console.log(sum)
}

console.log('Program Ended')

// Sure! Here are some examples of loop-related questions in JavaScript that don't involve using predefined functions:

// Print numbers from 1 to 10 using a loop:

// javascript
// Copy code
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// Sum of all elements in an array:

// javascript
// Copy code
// const arr = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log("Sum:", sum);
// Find the largest number in an array (without Math.max):

// javascript
// Copy code
// const numbers = [5, 10, 2, 8, 15];
// let max = numbers[0]; // Assume the first number is the largest

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }

// console.log("Max number:", max);
// Count the number of vowels in a string:

// javascript
// Copy code
// const str = "hello world";
// let vowelCount = 0;
// const vowels = "aeiouAEIOU";

// for (let i = 0; i < str.length; i++) {
//   if (vowels.includes(str[i])) {
//     vowelCount++;
//   }
// }

// console.log("Number of vowels:", vowelCount);
// Print a multiplication table for a given number:

// javascript
// Copy code
// const num = 5;

// for (let i = 1; i <= 10; i++) {
//   console.log(num + " x " + i + " = " + (num * i));
// }
// Reverse an array manually using a loop (without using reverse):

// javascript
// Copy code
// const arr = [1, 2, 3, 4, 5];
// const reversedArr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversedArr.push(arr[i]);
// }

// console.log("Reversed Array:", reversedArr);
// These examples use loops without relying on built-in functions like Math.max or Array.prototype.reverse, focusing entirely on logic constructed using loops.






// You said:
// more
// ChatGPT said:
// ChatGPT
// Here are more loop-related questions that do not use built-in functions:

// Find the smallest number in an array (without Math.min):

// javascript
// Copy code
// const numbers = [5, 10, 2, 8, 15];
// let min = numbers[0]; // Assume the first number is the smallest

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// console.log("Min number:", min);
// Print a pattern using nested loops (like a triangle of stars):

// javascript
// Copy code
// const rows = 5;

// for (let i = 1; i <= rows; i++) {
//   let pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }
// Check if a number is prime (using a loop):

// javascript
// Copy code
// const number = 29;
// let isPrime = true;

// for (let i = 2; i <= number / 2; i++) {
//   if (number % i === 0) {
//     isPrime = false;
//     break;
//   }
// }

// if (isPrime && number > 1) {
//   console.log(number + " is a prime number");
// } else {
//   console.log(number + " is not a prime number");
// }
// Find the factorial of a number using a loop:

// javascript
// Copy code
// const num = 5;
// let factorial = 1;

// for (let i = num; i > 0; i--) {
//   factorial *= i;
// }

// console.log("Factorial of " + num + " is " + factorial);
// Calculate the Fibonacci sequence up to a given number of terms:
// javascript
// Copy code
// const n = 10; // Number of terms
// let n1 = 0, n2 = 1, nextTerm;

// console.log("Fibonacci Series:");

// for (let i = 1; i <= n; i++) {
//   console.log(n1);
//   nextTerm = n1 + n2;
//   n1 = n2;
//   n2 = nextTerm;
// }
// Find the second largest number in an array:
// javascript
// Copy code
// const arr = [5, 10, 2, 8, 15];
// let max = -Infinity, secondMax = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     secondMax = max;
//     max = arr[i];
//   } else if (arr[i] > secondMax && arr[i] < max) {
//     secondMax = arr[i];
//   }
// }

// console.log("Second largest number:", secondMax);
// Find the sum of digits of a number (e.g., for 1234, the sum is 1+2+3+4=10):
// javascript
// Copy code
// let num = 1234;
// let sum = 0;

// while (num > 0) {
//   let digit = num % 10;
//   sum += digit;
//   num = Math.floor(num / 10);
// }

// console.log("Sum of digits:", sum);
// Count the occurrences of a specific character in a string:
// javascript
// Copy code
// const str = "hello world";
// const charToCount = 'o';
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === charToCount) {
//     count++;
//   }
// }

// console.log("Occurrences of " + charToCount + ":", count);
// Merge two arrays into one without using array functions:
// javascript
// Copy code
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const mergedArr = [];

// for (let i = 0; i < arr1.length; i++) {
//   mergedArr.push(arr1[i]);
// }

// for (let i = 0; i < arr2.length; i++) {
//   mergedArr.push(arr2[i]);
// }

// console.log("Merged Array:", mergedArr);
// Find whether an array is sorted in ascending order:
// javascript
// Copy code
// const arr = [1, 2, 3, 4, 5];
// let isSorted = true;

// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] > arr[i + 1]) {
//     isSorted = false;
//     break;
//   }
// }

// if (isSorted) {
//   console.log("The array is sorted in ascending order.");
// } else {
//   console.log("The array is not sorted in ascending order.");
// }
// These examples showcase a variety of loop-related problems involving arrays, numbers, and strings. They avoid using predefined helper functions and focus purely on loop logic.