let company = {
  sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
  development: {
      new1:[{name:'Jean',salary:1000000}],
      innner:{
          inner2:{
          sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }], //subdepartments
          internals: [{ name: 'Jack', salary: 1300 }],
          computer: [{ name: 'Duyen', salary: 9300 }]
      }
  }
  }
}
// function findSumofSalary(company) {
//   let sumSalary = 0;
//   for (const department in company) {
//     let dept = company[department];
//     if (Array.isArray(dept)) {
//       for (let person of dept) {
//         sumSalary += person.salary;
//         // console.log(sumSalary);
//       }
//     } else {
//       for (let subDepName in dept) {
//         let subDep = dept[subDepName];
//         for (let person of subDep ) {
//             sumSalary += person.salary;
//         }
//     }
//     }
//   }
//   return sumSalary;
// }

// console.log(findSumofSalary(company));

//recursion

function findSumofSalary(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    // for(let subdepName in department){
    //     let subdep = department[subdepName];
    //     sum += findSumofSalary(subdep);
    for (let subdep of Object.values(department)) {
      sum += findSumofSalary(subdep);
    }
    return sum;
  }
}
console.log("TOTAL SALARY:: ", findSumofSalary(company));

// returning object of names employees
function findNames(department) {
  if (Array.isArray(department)) {
    return department.map((employeeNames) => employeeNames.name);
  } else {
    let names = [];
    for (let subdep of Object.values(department)) {
      names = names.concat(findNames(subdep));
    }
    return names;
  }
}

console.log("FOR NAMES:: ",findNames(company));

//return names : salaries

function getEmployeeNameSalary(department){
  if (Array.isArray(department)) 
      return department.reduce(function (prev, current) 
      {
          console.log(prev, current)
          prev[current.name]= current.salary;
          return prev;
      },{}); 
  let nameSalary = {};
  for (let subdep of Object.values(department)) {
      let subDeptObj = getEmployeeNameSalary(subdep);
      for(let key in subDeptObj){
          nameSalary[key]= subDeptObj[key];
      }
  }
  return nameSalary ;
}

console.log("just for test: ",getEmployeeNameSalary(company));


//[ 'John', 'Alice', 'Peter', 'Alex', 'Jack' ]
function getEmployeeNameInArray(department){
  if (Array.isArray(department)) 
      return department.map(item => item.name); 
  let names = [];
  for (let subdep of Object.values(department)) {
      names = names.concat(getEmployeeNameInArray(subdep))
  }
  return names ;
}

console.log(getEmployeeNameInArray(company));

//count leaves

function countLeaves(company){
  let count = 0;
  for(let dept in company){
    if(typeof company[dept]!==Object || Array.isArray(company[dept])){
      count++;
    }
    else if(typeof company[dept] ===object){
      count = count + countLeaves(company[dept]);
    }
  }
  return count;
}

console.log("number of leaves::  ",countLeaves(company));

function reverse(company){
  let newObj = {};
  for(let key in company){
    if(typeof company[key]!=="object" &&!Array.isArray(typeof company[key])){
      newObj[company[key]] = key;
    }else if(typeof company[key]=="object" && !Array.isArray(company[key])){
      newObj[company[key]] = "object";
      newObj = {...newObj, ...reverse(company[key])}
    }else{
      newObj[company[key].join("")] = key;
    }
  }
  return newObj;
}

console.log("reverse:: ",company );