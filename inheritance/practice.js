 "use strict";
/**
 * /complete the code so that the above functions reside in a single object and are inherited by all User
//objects that are created using User as a constructor function.
console.log(user1.getFullName()); //John Smith
console.log(user1.getAge()); //21
 */
function User(firstname, lastname, birthDate) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthDate = birthDate;
}
let user1 = new User('John', 'Smith', new Date('2000-10-01'));
let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));
function getFullName() {
     return this.firstname + ' ' + this.lastname; }
function getAge() { 
    return new Date().getFullYear() - this.birthDate.getFullYear(); }

User.prototype.getFullName = getFullName;
User.prototype.getAge = getAge;

// console.log(user1.getFullName()); //John Smith
// console.log(user1.getAge()); //22


//exam 

// function area(){
//     console.log(3.14*this.radius*this.radius);
// }
// const circle = {radius: 1, area: area};
// setTimeout(circle.area,5000);//NaN
// circle.area(); //3.14

//quiz 
// function makeCounter() {
//     let count = 0;
//     return function() { return count++; };
//     }

    /**
     * Now modify makeCounter so that the callback it returns accepts an argument for
     *  the increment value. It should also return a warning string 
     * whenever it has been incremented by a value greater than 3. E.g.,
     */
    function makeCounter(){
        let count = 0;
        return function(increment){
            if(increment==undefined){
                count = count+1;
            }else{
                count = count+increment;
            }
            if(increment>3){
                return "warning increment was by value greater than 3";
            }else{
                return count;
            }
        }

    }
    const count = makeCounter();
    console.log(count());
    console.log(count(2));
    console.log(count(4));

    // output
    /*let animal = {
        name: 'default'
      }
      
      function Bird(name, age) {
        this.name = name;
        this.age = age
        this.fly = function() {
          alert(this.name + ' is flying. . ');
        }
      }
      
      debugger;
      alert(Bird.prototype);
      alert(Bird.__proto__);
      alert(animal.prototype);
      alert(animal.__proto__);
      
      Bird.prototype = animal;
      
      alert(Bird.prototype);
      alert(Bird.__proto__);*/

      //palindrom
      const isPalindrome = (str) => {
        return str === str.split("").reverse().join("");
      };
      console.log(isPalindrome("madama"));

    //   function Bear() {}
    //    Bear.prototype = { climbs: true}; 
    //    const bear = new Bear(); 
    //    Bear.prototype = {}; 
    //    alert( bear.climbs );

       function Bear() {} 
       Bear.prototype = { climbs: true}; 
       const bear = new Bear(); 
       Bear.prototype.climbs = false; 
       alert( bear.climbs );