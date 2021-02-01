/* Map the Debris

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

The standard gravitational parameter (GM) μ of a celestial body is the product of the gravitational constant G and the mass M of the body.
*/

//console.log(Math.round((2*Math.PI)*Math.sqrt(Math.pow(a,3) / GM)))

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    return arr
        .map(item => {
            let a = earthRadius + item.avgAlt;
            let result = Math.round((2 * Math.PI) * Math.sqrt(Math.pow(a, 3) / GM))

            return { name: item.name, orbitalPeriod: result }
        });;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);



orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]) //should return [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]) //should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].