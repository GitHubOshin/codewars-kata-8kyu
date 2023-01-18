/**
 * Grasshopper - Summation
 * https://www.codewars.com/kata/55d24f55d7dd296eb9000030
 *
 * FUNDAMENTALS   |   MATHEMATICS
 *
 * DESCRIPTION:
 *
 *   Write a program that finds the summation of every number from 1 to num.
 *   The number will always be a positive integer greater than 0.
 *
 * Example (Input -> Output):
 *
 *   2 -> 3 (1 + 2)
 *   8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
 */

function summation(num) {
  let result = 0
  for (let i = 0; i <= num; i++) {
    result += i
  }
  return result
}

console.log(summation(1)) //  1
console.log(summation(2)) //  3
console.log(summation(3)) //  6
console.log(summation(5)) // 15
console.log(summation(8)) // 36
