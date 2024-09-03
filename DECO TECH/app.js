
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
// // method 1

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

// //   ---------------------------------------------------- write BS algo on sorted arr

// const arr = [100, 9, 4, 3, 6, 0, 4, 2, 1, 55, 4, 6, 7, 99];

// function sorting(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         // swap them
//         const swap = arr[i];
//         arr[i] = arr[j];
//         arr[j] = swap;
//       }
//     }
//   }
//   return arr;
// }

// function BS(arr, n) {
//   const sorted_array = sorting(arr);
//   console.log("sorted array : ", sorted_array);

//   let start = 0;
//   let end = arr.length;
//   let mid = Math.floor((start + end) / 2);
//   let flag = true
//   console.log(start,mid,end)
//   let iter = 0
//   while (start === mid && end === mid && flag) {
//     iter++
//     if (arr[mid] == n) {
//       console.log(`${n} found on index ${mid}`);
//       flag = false
//       console.log(start,mid,end)
//     } 
//     else if (arr[mid] > n) {
//       end = mid
//       mid = Math.floor((start + end) / 2);
//       console.log(`${n} found on index ${mid}`);

//     } 
//     else if (arr[mid] < n) {
//       start = mid;
//       mid = Math.floor((start + end) / 2);
//       console.log(`${n} found on index ${mid}`);

//     }
//   }
//   console.log('i',iter)
// }
// BS(arr, 1);

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


// //---------------------------------------------------- write a program for stare case 
// function stareCase(){
//   let step = '*'
//   for(var i=1; i<=20; i++){
//     console.log(step)
//     step+='*'
//     for(var j=1; j<i;j++){
//     }
//   }
// }
// stareCase()

// // ----------------------------------------- write a code for a**3 + b**3 == c**3 + d**3.
// let i=0
// for(let a = 1; a<= 10;a++){
//   for(let b=1;b<=10;b++){
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


