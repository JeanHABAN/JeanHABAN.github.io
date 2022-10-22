let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }], //subdepartments
    internals: [{name: 'Jack', salary: 1300}]
    }
    };

    // get the names of employees
    
 function employeesName(department){
    if(Array.isArray(department)){
        return department.map((employee)=>{
            return employee.name;
        })
    }else{
        let  emply = [];
    for(let subdepname of Object.values (department)){
        let subd = employeesName(subdepname);
        emply = emply.concat(subd);
    }
    return emply;
        
    }
    
 }

 console.log(employeesName(company));




    