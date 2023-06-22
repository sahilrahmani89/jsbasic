
// Dynamic Programming:

// Fibonacci Sequence: It calculates the nth Fibonacci number using a recursive algorithm with memoization to 
// avoid redundant computations.
// Knapsack Problem: It solves the problem of selecting a subset of items with maximum total value within a 
// weight constraint.
// Longest Common Subsequence: It finds the longest subsequence that two sequences have in common.


{
	//fibonnacci sequence
	function fibonacci(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 2) {
    return 1;
  }
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fibonacci(6)); // Output: 8

}
{
	// Knapsack Problem:
	function knapSack(capacity, weights, values, n) {
  if (n === 0 || capacity === 0) {
    return 0;
  }

  if (weights[n - 1] > capacity) {
    return knapSack(capacity, weights, values, n - 1);
  }

  const included = values[n - 1] + knapSack(capacity - weights[n - 1], weights, values, n - 1);
  const excluded = knapSack(capacity, weights, values, n - 1);

  return Math.max(included, excluded);
}

const weights = [1, 2, 3, 5];
const values = [1, 6, 10, 16];
const capacity = 7;
const n = values.length;

console.log(knapSack(capacity, weights, values, n)); // Output: 22

}
{
	//longest common sequence
	function lcs(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let i = m;
  let j = n;
  let lcs = '';

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs = str1[i - 1] + lcs;
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return lcs;
}

let str1 = 'AGGTAB';
let str2 = 'GXTXAYB';

console.log(lcs(str1, str2)); // Output: GTAB

}