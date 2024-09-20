// function letterFrequency(word) {
//   const frequencyMap = {};

//   for (const letter of word) {
//     frequencyMap[letter] = (frequencyMap[letter] || 0) + 1;
//   }

//   console.log(frequencyMap);
// }

// letterFrequency("abu hurairah");

// ================== TASK 02 ===============================
// -------------------------------------------------------write a function to find the power of a number
// method 01 with if else and for loop

// function power(base, exponent) {
//     if (exponent === 0) {
//       return 1;
//     }

//     let result = base;
//     for (let i = 1; i < exponent; i++) {
//       result *= base;
//     }
//     console.log(result)
//     return result;
//   }

//   power(2, 3);

// ---------------------------------------------------------------------------method 02 without for loop

// function power(base, exponent) {
//     if (exponent === 0) {
//       return 1;
//     }

//     return base * power(base, exponent - 1)

// }

// let out = power(2, 3);
// console.log(out)

// // find the power of a number
// // method 03

// const res = {};
// function findPower(base, exp) {
//   if (exp === 0) {
//     return 1;
//   }
//   res[base] = base * findPower(base, exp - 1);
//   return res[base];
// }

// let out = findPower(2, 4);
// console.log(res);

// // -----------------------------------write a function that find the absolute of a number without using if else

// function findAbs(n){
//     let r = n>0? n*1 : n*-1
//     console.log(r)

// }
// findAbs(-6);

// // ---------------------------------------write a function that check if a num is even || odd without if else

// function findNum(n) {
//   let res = (n % 2 == 0 ? "even" : "odd");
//   console.log(res);
// }

// findNum(301);

// ----------------------------------------------------write a linear search algo of unsorted list
//  method 01 loop and if else

// const arr = [9,4,2,3,8,12,54,7,1,89,23,54]
// let flag = false
// function linearSearch(arr,n){
//     for(var i=0; i<arr.length;i++){
//         if(n==arr[i]){
//             console.log(`${n} found on the array index : ${i}`)
//             flag = true
//         }
//     }
//     if(!flag){
//         console.log(`${flag} : number not found`)
//     }
// }

// linearSearch(arr,54)

// //  ----------------------------------------------------method 02 recursion and if else

// const arr = [9, 4, 2, 3, 8, 12, 54, 7, 1, 89, 23,89,  54, 2];
// const length = arr.length;
// let iteration = 0;
// function linearSearch(arr, n, length) {
//   if (length == 0) {
//     return `${iteration} element(s) found`;
//   }
//   if (length > 0) {
//     if (arr[length - 1] == n) {
//       iteration++;
//       console.log(`${n} found on the array index : ${length - 1}`);
//     }
//     return linearSearch(arr, n, length - 1);
//   }
// }
// let out = linearSearch(arr, 89, length);
// console.log(out);

// // ----------------------------- BS ALGO USING RECURSION METHOD 02

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let start = 0;
// let end = arr.length;
// let len = arr.length;
// let m = Math.floor((start + end) / 2);
// let i = 0;
// function RLoop(start, end, len, find) {
//   i++;
//   console.log(`mid at ${i} iteration is : ${m}`);
//   if (len > 2) {
//     if (arr[m] == find) {
//       return `${find} is found at mid. and mid value index is ${m}`;
//     } else if (arr[m] > find) {
//       len = m;
//       end = len;
//       m = Math.floor((start + end) / 2);
//       return RLoop(start, end, len, find);
//     } else if (arr[m] < find) {
//       len = end - start + 1;
//       start = m;
//       m = Math.floor((start + end) / 2);
//       return RLoop(start, end, len, find);
//     }
//   }
// }

// const res = RLoop(start, end, len, 14);
// console.log("res : ", res);
// console.log("i : ", i);

// // -----------------------------------------------write code to print diamond

// function diamond(len) {
//   if (len < 1 ) {
//     console.log("Length must be a positive number.");
//     return;
//   }

//   let diamond = '';

//   for (let i = 0; i < len; i++) {
//     let spaces = Math.abs(len / 2 - i);
//     let stars = len - 2 * spaces;
//     diamond += ' '.repeat(spaces) + '*'.repeat(stars) + '\n';
//   }

//   console.log(diamond);
// }

// printDiamond(22);

// // ----------------------------------------- write a code for a**3 + b**3 == c**3 + d**3.
// let i=0
// for(let ao = 1; a<= 10;a++){
//   fr(let b=1;b<=12;b++){
//     for(let c = 1;c <=10;c++){
//       for(let d = 1;d <= 10; d++){
//             i++
//               if(a**3 + b**3 == c**3 + d**3)
//                   console.log(`a: ${a},b: ${b},c: ${c}, d: ${d}`);
//           }
//       }
//   }
// }
// console.log('i : ',i)

// for(let a = 1; a<= 10;a++){
//   for(let b=1;b<=10;b++){
//       for(let c = 1;c <=10;c++){
//           let d = Math.floor(Math.cbrt(a**3 + b**3 - c**3))
//           if(a**3 + b**3 == c**3 + d**3){
//           console.log(a+b+c+d);
//           console.log(`a: ${a}, b:${b}, c:${c}, d:${d}`)

//           }
//       }
//   }
// }

// -------------------------------------------- determinant of a matrix 2x2 and 3*3

// // 2 by 2 matrix

// function determinant(matrix){
//   const a = matrix[0][0]
//   const b = matrix[0][1]
//   const c = matrix[1][0]
//   const d = matrix[1][1]

//   const det = (a * d) - (b * c)
//   console.log(det)
// }
// const a = prompt('Enter the value of a: ')
// const b = prompt('Enter the value of b: ')
// const c = prompt('Enter the value of c: ')
// const d = prompt('Enter the value of d: ')

// const matrix = [
//   [a, b],
//   [c, d]
// ]
// determinant(matrix)

// // 3 by 3 matrix

// function determinant(matrix) {

//   if(matrix.length !== 3 || matrix[0].length !== 3){
//     console.log(`Invalid matrix size. Please provide a 3*3 matrix`)
//     return 0
//   }
//   const a = matrix[0][0];
//   const b = matrix[0][1];
//   const c = matrix[0][2];
//   const d = matrix[1][0];
//   const e = matrix[1][1];
//   const f = matrix[1][2];
//   const g = matrix[2][0];
//   const h = matrix[2][1];
//   const i = matrix[2][2];

//   const det = a * (e * i - f * h) - b * (d * i - g * f) + c * (d * h - e * g);
//   console.log(det);
// }

// const a = prompt("Enter the value of a:");
// const b = prompt("Enter the value of b:");
// const c = prompt("Enter the value of c:");
// const d = prompt("Enter the value of d:");
// const e = prompt("Enter the value of e:");
// const f = prompt("Enter the value of f:");
// const g = prompt("Enter the value of g:");
// const h = prompt("Enter the value of h:");
// const i = prompt("Enter the value of i:");

// const matrix = [
//   [a, b, c],
//   [d, e, f],
//   [g, h, i],
// ];

// determinant(matrix);

// -------------------------------------------- BUBBLE SORTING

// const arr = [2,3,4,1,5,6,7,11,10]
// function bubbleSorting(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j] > arr[j+1]){
//                 const swap = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = swap
//             }
//         }
//     }
// }

// bubbleSorting(arr)
// console.log(arr)

// find MIN and MAX of the array

// function find(arr) {
//   let res = { min: arr[0], max: arr[0] };
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < res.min) {
//       res.min = arr[i];
//     }
//     if (arr[i] > res.max) {
//       res.max = arr[i];
//     }
//   }
//   console.log(res);
// }

// const arr = [2, 3, 4, 1, 5, 6, 7, -1,11, 10, 45, 65, 7, 8, 9, 0];
// find(arr);

// SORTING WITH EVEN/ODD

// const arr = [2, 3, 4, 1, 5, 6, 7, 11, 10, 45, 65, 7, 8, 9, 0];

// function separateEvenOdd(arr){
//     let even = []
//     let odd = []

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2 === 0){
//             even.push(arr[i])
//         }
//         else odd.push(arr[i])
//     }

//     return {odd,even}
// }

// function mergeArr(odd,even){
//     return odd.concat(even)
// }
// function sortArr(arr){
//     const res = separateEvenOdd(arr)

//     for(let i=0; i<res.odd.length;i++){
//         for(let j=0;j<res.odd.length;j++){
//             if(res.odd[j] > res.odd[j+1]){
//                 const swap = res.odd[j]
//                 res.odd[j] = res.odd[j+1]
//                 res.odd[j+1] = swap
//             }
//         }
//     }
//     for(let i=0;i<res.even.length;i++){
//         for(let j=0;j<res.even.length;j++){
//             if(res.even[j] > res.even[j+1]){
//                 const swap = res.even[j]
//                 res.even[j] = res.even[j+1]
//                 res.even[j+1] = swap
//             }
//         }
//     }
//     const sorted_array = mergeArr(res.odd,res.even)
//     console.log('sorted_array',sorted_array)

// }

// sortArr(arr)

// ----------------------------------------------------STARE CASE 

// let count = 1;
// for (let i = 1; i <= 4; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += count;
//     count++;
//   }
//   console.log(line);
// }

// console.log("-------------------");

// ----------------------------------------------------STARE CASE WITH SINGLE LOOP

// let count = 1
// let str = ''
// let line = 1
// for(i=1; count<=20; i++){
//     str+=count;
//     count++
//     if(i===line){
//         str += '\n'
//         line++
//         i=0
//     }
// }

// console.log(str)

// // -----------------------------------------------MERGE SORT ALGO

// function mergeSort(arr) {
//   if (arr.length < 2) return arr;

//   let mid = Math.floor(arr.length / 2);

//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }

// function merge(left, right) {
//   let sortedArr = [];
//   while (left.length && right.length && right[0] %2 === 0) {
//     if (left[0] < right[0] ) {
//       sortedArr.push(left.shift());
//     } else {
//       sortedArr.push(right.shift());
//     }
//   }

//   return [...sortedArr, ...left, ...right];
// }

// const arr = [6, 5, 4, 3, 2, 1];
// console.log(mergeSort(arr));

// -----------------------------------------CLASS -----------------------------------


// let list = new Array(4);
// in other language array is has fixed size neither it can be increased nor decreased
// but JS is dynamic language so we can increase or decrease the size of the array

// Array pros:
// access time is O(1), because we can access the element by index
// cons:
// we cannot increase or decrease the size of the array

// List vs Array:
// List is a collection of elements that are ordered and changeable and allows duplicate members
// Array is a collection of elements that are ordered and changeable and does not allows duplicate members

// there are three types of list
// 1. singly linked list
// 2. doubly linked list
// 3. circular linked list

// Linked List concept:
const x = {
  node: 1,
  next: {
    node: 2,
    next: {
      node: 3,
      next: {
        node: 4,
        next: {
          node: 5,
          next: null,
        },
      },
    },
  },
};

// memory allocation in linked list: 
// linked list access time : O(n)
// insertion and deletion : O(1)
// we can perform deletion and addition in between 
// it is one way means can trace from start to end 
// and cannot tracae reverse 
// we can also create linked list in JS 

// if we want to perform iteration from the half of the linked list 
// than we will use double linked list 

// JS use this data structure by default array list: []
// c sharp, pyhton, java almost every lenguage use this array list 
// How element dynamically add?
// when we push than a new array is created of double size 
// than old array is replaced with new array 
// access time is fast due to sequential  O(1)
// push and pop is O(n)
// we need these data structure when we face dangerous algorithm
// we have to select DS according to the scenarios 
// there is one more data structure called binary data structure
// we will discuss later
// we have one more data structure called stack and queue (most asking in interview)
// Stack: LIFO (last in first out) FILO (first in last out)
// Queue: FIFO (first in first out) LILO (last in last out)
// we can implement stack and queue using array and linked list
// stack terms: pop and push 
// we also use pop and push in array list because the element is added and removed from the last index
// queue terms: enqueue and dequeue
// stack and quese has code level question in interview
// Q: How can we achieve queue by using stack behavious?
// A: we can use two stack to achieve queue behaviour

// async await also use queue data structure 

// last Data structure called "DICTONARY"
// characteristics:
// 1. key value pair
// 2. key is unique
// 4. key is string
// 5. value can be any type

// access time: O(1)
// add and delete time: O(n)

// LIST, STACK, QUEUE, DICTIONARY these are the most popular data structure
// practice these DS 


// Q write code for LHR?

const cache = {
  cache1: {arg:[],output:[]},
  cache2: {arg:[],output:[]},
  cache3: {arg:[],output:[]},
  cache4: {arg:[],output:[]},
  cache5: {arg:[],output:[]},
}

const sum = (a,b)=>{
  return a+b
}

const arr1 = [1,2,3]
const arr2 = [1,2,3]
if(cache !== caches){
  console.log('found')
}
