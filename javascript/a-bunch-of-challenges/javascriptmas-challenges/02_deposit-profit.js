/* Deposit Profit
Find out how long it would take for your balance to pass a specific threshold with the assumption that you don´t make any additional deposits.
For:

deposit = 100
rate = 20
threshold = 170

the output should be 3

If each year the amount of money increases 20%
year 0 = 100
year 1 = 120
year 2 = 144
year 3 = 172,8

that means that it will take 3 years for your balance topass the threshold wich is the answer.
*/

function depositProfit(deposit, rate, threshold) {
    count = 0;
    while (deposit < threshold) {
        rate = rate * deposit / 100
        var depRate = deposit / rate;
        deposit = deposit + (deposit / depRate);
        count++
    }
    return count;
}

console.log(depositProfit(100,20,170));