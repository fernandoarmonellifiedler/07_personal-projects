/* Make a Person

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.*/

var Person = function (firstAndLast) {
  // Only change code below this line
  let fullName = firstAndLast;
  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];

  // Complete the method below and implement the others similarly
  this.getFullName = function () {
    return fullName;
  };

  this.getFirstName = function () {
    return firstName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.setFirstName = function (first) {
    firstName = first;
    fullName = firstName + " " + lastName;
    return firstName;
  };
  this.setLastName = function (last) {
    lastName = last;
    fullName = firstName + " " + lastName;
    return lastName;
  };
  this.setFullName = function (firstAndLast) {
    fullName = firstAndLast;
    firstName = firstAndLast.split(' ')[0];
    lastName = firstAndLast.split(' ')[1];
    return fullName;
  };


  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();



Object.keys(bob).length //should return 6.
bob instanceof Person //should return true.
bob.firstName //should return undefined.
bob.lastName //should return undefined.
bob.getFirstName() //should return "Bob".
bob.getLastName() //should return "Ross".
bob.getFullName() //hould return "Bob Ross".
bob.getFullName() //should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName() //should return "Haskell Curry" after bob.setLastName("Curry").
bob.getFullName() //should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName() //should return "Haskell" after bob.setFullName("Haskell Curry").
bob.getLastName() //should return "Curry" after bob.setFullName("Haskell Curry").