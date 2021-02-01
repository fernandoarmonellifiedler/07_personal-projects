/* Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.*/

function convertHTML(str) {
    let splittedStr = str.split("");

    for (let i in splittedStr) {
        if (splittedStr[i] == "&") {
            splittedStr[i] = "&amp;"
        }
        if (splittedStr[i] == "<") {
            splittedStr[i] = "&lt;"
        }
        if (splittedStr[i] == ">") {
            splittedStr[i] = "&gt;"
        }
        if (splittedStr[i] == '"') {
            splittedStr[i] = "&quot;"
        }
        if (splittedStr[i] == "'") {
            splittedStr[i] = "&apos;"
        }
    }

    let joinStr = splittedStr.join("");

    return joinStr;
}

convertHTML("Dolce & Gabbana");

convertHTML("Dolce & Gabbana") //should return "Dolce &amp; Gabbana".
convertHTML("Hamburgers < Pizza < Tacos") //should return "Hamburgers &lt; Pizza &lt; Tacos".
convertHTML("Sixty > twelve") //should return "Sixty &gt; twelve".
convertHTML('Stuff in "quotation marks"') //should return "Stuff in &quot;quotation marks&quot;".
convertHTML("Schindler's List") //should return "Schindler&apos;s List".
convertHTML("<>") //should return "&lt;&gt;".
convertHTML("abc") //should return "abc".