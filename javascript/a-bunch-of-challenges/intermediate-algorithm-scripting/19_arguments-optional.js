/* Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.*/

function addTogether(...args) {

    var isNumber = function (x) {
        if (typeof x !== "number") {
            return undefined;
        } else return x;
    }

    if (args.length > 1) {
        let num1 = isNumber(args[0]);
        let num2 = isNumber(args[1]);

        if (num1 === undefined || num2 === undefined) {
            return undefined;
        } else return num1 + num2;
    }

    else {
        let num3 = isNumber(args[0]);

        if (isNumber(args[0])) {
            return function (arg2) {
                if (num3 === undefined || isNumber(arg2) === undefined) {
                    return undefined;
                } else {
                    return num3 + arg2
                }
            }
        }
    }
}

addTogether(2, 3);


addTogether(2, 3) //should return 5.
addTogether(23, 30) //should return 53.
addTogether(5)(7) //should return 12.
addTogether("http://bit.ly/IqT6zt") //should return undefined.
addTogether(2, "3") //should return undefined.
addTogether(2)([3]) //should return undefined.