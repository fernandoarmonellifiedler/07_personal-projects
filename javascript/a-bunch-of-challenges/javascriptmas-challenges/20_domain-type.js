/* Domain type

You have to implement the type of feature like the onde used in GoDaddy where you can choose your top-level domain depending onthe kind of organization you have.

You want to write a function that labels the domains as "commercial", "organization", "network" or "information" for .com, .org, .net or .info repectively. For the given list of domains return the list of their labels.

Example:
For domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"] the output should be ["organization", "commercial", "network", "information"].

Hints: split(), push()
*/

function domainType(domains) {
    let arr = [];

    for (let i in domains) {
        let afterDot = domains[i].split('.')
        arr.push(afterDot[afterDot.length - 1]);
    };

    let domArr = [];
    for (let j in arr) {
        if (arr[j] === "org") domArr.push("organization");
        if (arr[j] === "com") domArr.push("commercial");
        if (arr[j] === "net") domArr.push("network");
        if (arr[j] === "info") domArr.push("information");
    };

    return domArr;
}


const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];

console.log(domainType(domains)) // ["organization", "commercial", "network", "information"]