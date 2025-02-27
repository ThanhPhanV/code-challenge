/**
 * The first solution: Loop
 * The easiest way to implement the function is to loop number and then sum them.
 */
function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * the second solution, using math formula
 */
function sum_to_n_b(n: number): number {
  return (n * (n + 1)) / 2;
}

/**
 * The third solution is using recursion
 * sum(n) = n + sum(n-1)
 */
function sum_to_n_c(n: number): number {
  if (n === 1) {
    return 1;
  }

  if (n === 0) {
    return 0;
  }

  return n + sum_to_n_c(n - 1);
}
