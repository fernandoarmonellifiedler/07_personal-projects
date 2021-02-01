const children = 3;
const candy = 10;

function candies(children, candy) {
    return Math.floor(candy / children) * children;
}


const result = candies(children, candy);

console.log("result: ", result);
