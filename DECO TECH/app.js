const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let start = 0;
let end = arr.length;
let len = arr.length;
let m = Math.floor((start + end) / 2);
let i = 0;
function RLoop(start, end, len, find) {
  i++;
  console.log(`mid at ${i} iteration is : ${m}`);
  if (len > 2) {
    if (arr[m] == find) {
      return `${find} is found at mid. and mid value index is ${m}`;
    } else if (arr[m] > find) {
      len = m;
      end = len;
      m = Math.floor((start + end) / 2);
      return RLoop(start, end, len, find);
    } else if (arr[m] < find) {
      len = end - start + 1;
      start = m;
      m = Math.floor((start + end) / 2);
      return RLoop(start, end, len, find);
    }
  }
}

const res = RLoop(start, end, len, 14);
console.log("res : ", res);
console.log("i : ", i);
