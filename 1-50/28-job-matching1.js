/**
 * Job Matching #1
 * https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript
 *
 * DESCRIPTION
 *
 *      Let's build a matchmaking system that helps discover jobs
 *      for developers based on a number of factors.
 *
 *      One of the simplest, yet most important factors is compensation.
 *      As developers we know how much money we need to support our lifestyle,
 *      so we generally have a rough idea of the minimum salary we would be satisfied with.
 *
 *      Let's give this a try. We'll create a function match which takes a candidate and a job,
 *      which will return a boolean indicating whether the job is a valid match for the candidate.
 *
 *      A candidate will have a minimum salary, so it will look like this:
 *
 *              let candidate = {
 *                minSalary: 120000
 *              }
 *
 *      A job will have a maximum salary, so it will look like this:
 *
 *              let job = {
 *                maxSalary: 140000
 *              }
 *
 *      If either the candidate's minimum salary
 *      or the job's maximum salary is not present, throw an error.
 */
let candidate1 = { minSalary: 120000 }
let job1 = { maxSalary: 130000 }
let job2 = { maxSalary: 80000 }

function match(candidate, job) {
  // is this job a valid match for the candidate?
  return candidate && job !== '' ? candidate.minSalary < job.maxSalary : error
}
console.log(match());
console.log(match(candidate1, job1)) // true
console.log(match(candidate1, job2)) // false
