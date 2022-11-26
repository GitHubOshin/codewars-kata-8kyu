/**
 * Shifty Closures
 * https://www.codewars.com/kata/514aa0dc21607ae236000017
 *
 * DEBUGGING
 *
 * DESCRIPTION:
 *
 *   Functional closures can get overly attached. Set them straight!
 *   Why doesn't greet_abe() actually greet Abe?
 */


function greet_abe() {
  return 'Hello, Abe!'
}

function greet_ben() {
  return 'Hello, Ben!'
}

greet_abe() // "Hello, Abe!"
greet_ben() // "Hello, Ben!"
