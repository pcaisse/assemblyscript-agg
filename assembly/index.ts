// The entry file of your WebAssembly module.

export function sum(arr: Int16Array): i32 {
  let sum = 0;
  for (let i = 0, k = arr.length; i < k; ++i) {
    sum += arr[i];
  }
  return sum;
}

export function sumUpTo(k: i32): i32 {
  let sum = 0;
  for (let i = 0; i < k; ++i) {
    sum += i;
  }
  return sum;
}
