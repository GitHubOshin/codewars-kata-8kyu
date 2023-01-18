/**
 * Square(n) Sum
 * https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
 *
 * ARRAYS  |  LISTS  |  FUNDAMENTALS
 *
 * DESCRIPTION:
 *
 *   Complete the square sum function so that it squares each number
 *   - passed into it and then sums the results together.
 *
 * Example:
 *
 *    [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
 */

function squareSum(numbers) {
  let nArr = numbers.map((n) => n ** 2)
  return nArr.reduce((acc, curr) => acc + curr, 0)
}

console.log(squareSum([1, 2])) // 5
console.log(squareSum([0, 3, 4, 5])) // 50
console.log(squareSum([])) // 0
