/* 
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
*/

function alphabetPosition(text) {
    var transformedText = text.toLowerCase();
    var stringText = '';
    var alphabet = [
          {name:'a', number: '1'},
          {name:'b', number: '2'},
          {name:'c', number: '3'},
          {name:'d', number: '4'},
          {name:'e', number: '5'},
          {name:'f', number: '6'},
          {name:'g', number: '7'},
          {name:'h', number: '8'},
          {name:'i', number: '9'},
          {name:'j', number: '10'},
          {name:'k', number: '11'},
          {name:'l', number: '12'},
          {name:'m', number: '13'},
          {name:'n', number: '14'},
          {name:'o', number: '15'},
          {name:'p', number: '16'},
          {name:'q', number: '17'},
          {name:'r', number: '18'},
          {name:'s', number: '19'},
          {name:'t', number: '20'},
          {name:'u', number: '21'},
          {name:'v', number: '22'},
          {name:'w', number: '23'},
          {name:'x', number: '24'},
          {name:'y', number: '25'},
          {name:'z', number: '26'}
    ];

    for (let i = 0 ; i < transformedText.length ; i++) {
        for (let j = 0 ; j < alphabet.length ; j++) {
            if (alphabet[j].name == transformedText[i]) {
                stringText += alphabet[j].number;
                stringText += " ";
            }
        }
    }
    var newStringText = stringText.slice(0 , -1);
    return newStringText;
}

//console.log(alphabetPosition("Hola"));
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//console.log(alphabetPosition("The narwhal bacons at midnight."));