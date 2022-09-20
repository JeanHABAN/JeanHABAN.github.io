"use strict";
/**
 * const team = [ "Bob", "Fred", "Jim“]
// destructure the team array onto variables with the same names as the elements, but all lower case
console.log("expect Bob", bob );
console.log("expect Jim", jim);
 */

const team = [ "Bob", "Fred", "Jim"];
const [bob, , jim] = team;

console.log("expect Bob", bob );
console.log("expect Jim", jim);

/**
 * const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" }
// 1. destructure the team object onto variables with the same names as the properties
console.log("expect Big Sleep", center);
console.log("expect Jim", power);
 */

const teams = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" }

const {center, power} = teams;

console.log("expect Big Sleep", center);
console.log("expect Jim", power);


// 2. destructure the team onto variables: one (point guard), two (shooting guard), 
//three (small forward), four (power forward) and five (center)

const{power: four, point:one} =teams;
console.log("expect Jim: ", four);
console.log("expect Bob: ", one);


//create and log to the console a JSON string from john. Then create a new instance of john, johnClone, using 
//JSON.parse on the JSON string you created. Is john === johnClone?
const john = {
name: "John", 
surname: "Smith",
isAdmin: false,
birthday: {"year": 2000, "month": "February", "day": 3},
friends: [0,1,2,3]
}
const johnJSON = JSON.stringify(john);
console.log("john string is: ", johnJSON);

const johnClone = JSON.parse(johnJSON);
console.log("johnClone: ",johnClone );