/* Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.*/

//first aproach
function sumPrimes(num) {
    let arr = [];

    for (let i = 1; i <= num; i++) arr.push(i)

    return arr
        .filter(num => {
            for (let start = 2; num > start; start++) {
                if (num % start == 0) {
                    return false;
                }
            }
            return num > 1;
        })
        .reduce((a, b) => a + b)
}

sumPrimes(10);


sumPrimes(10) //should return a number.
sumPrimes(10) //should return 17.
sumPrimes(977) //should return 73156.

/* Solutions from FCC:
Solutions
 Solution 1 - Divisibility checking (Click to Show/Hide)
function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}
Code Explanation
We loop over all values in our range, adding them to the sum if they are prime.
Our primality checking function returns false if the target number is divisible by any number in between 2 and the square root of the target number. We only need to check up to the square root because the square root of a number is the largest possible unique divisor.

 Solution 2 - List of prime numbers (Click to Show/Hide)
function sumPrimes(num) {
  // Check all numbers for primality
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}
Code Explanation
This solution is very similar to Solution 1.
In this solution we retain a list of all primes found so far and check if any of these numbers divide into each number in our range.

 Solution 3 - Prime number sieve (Click to Show/Hide)
function sumPrimes(num) {
  // Prime number sieve
  let isPrime = Array(num + 1).fill(true);
  // 0 and 1 are not prime
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      // i has not been marked false -- it is prime
      for (let j = i * i; j <= num; j += i)
        isPrime[j] = false;
    }
  }

  // Sum all values still marked prime
  return isPrime.reduce(
    (sum, prime, index) => prime ? sum + index : sum, 0
  );
}
Code Explanation
This solution is based on the Sieve of Eratosethenes 3.0k.
We create a boolean array for the primality of each number in our range. All numbers except 0 and 1 are assumed to be prime.
Then, we start with 2 and proceed to num, marking every multiple of a prime number as false, or ‘not prime’.
Finally, we reduce our sieve array, returning the sum of all indices still marked as true or ‘prime’.
Note: many optimizations can be made to improve the efficiency of this sieve, but they have been omitted for the sake of simplicity and readability.

*/