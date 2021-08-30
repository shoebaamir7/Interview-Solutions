/* 
 * Solution to Project Euler problem 1 using Javascript
 * You can share it and suggest for improvements.
 * 
 */

/**
 * Problem 1
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
let sum = 0;
let tr = '';
for(let i=0; i<=100; i++) {
    if (i%3==0 || i%5==0) {
      sum += i;
      tr += '<tr><td>'+i+'</td></tr>';
    }
}
document.getElementById('content').innerHTML = 'sum = ' +sum;
document.getElementById('tableEuler').innerHTML = tr;