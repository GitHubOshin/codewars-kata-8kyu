/**
 * Max Headroom and JavaScript style
 * https://www.codewars.com/kata/52a47dd7e950edabfa000391
 *
 * DEBUGGING
 *
 * DESCRIPTION:
 *
 *    Shouldn't the two functions getMax1 and getMax2 be equivalent
 *    and return the same value? Can you spot a problem and fix it?
 *    Can you learn something about JavaScript style in this kata?
 */

var max = { name: 'Max Headroom' }

function getMax1() {
  return max
}

function getMax2() {
  return max
}

getMax2() == getMax1() // true
