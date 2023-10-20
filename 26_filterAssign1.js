console.log(`============================= Assignment 2 - Filter Method =====================================================`);


class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary,emp_company){
    
    this.emp_id= emp_id;
    this.emp_name= emp_name
    this.emp_dept= emp_dept;
    this.emp_salary= emp_salary;
    this.emp_company= emp_company;
    
    }
    
    }
    const emp_anil = new Employee(22,"Anil","IT", 50000,"TCS");
    const emp_radha = new Employee(33,"Radha","HR", 74000,"Wipro");
    const emp_rishi = new Employee(55,"Rishi","Finance", 47000,"TCS");
    const emp_sonali = new Employee(66,"Sonali","Finance", 45000,"Infy");
    const emp_monika = new Employee(77,"Monika","IT", 40000,"Wipro");
    const emp_viny = new Employee(88,"Vinayak","IT", 75000,"TCS");
    const emp_mahi= new Employee(99,"Mahesh","HR", 85000,"Infy");
    
    
    const arrayEmployee = [emp_anil,emp_radha, emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];


    console.log(`======================== Employee Details: Traverse using forEach ===============================`);


    const tcsEmployee =arrayEmployee.filter((employee)=>{

return employee.emp_company=="TCS";

    })
    //console.log(EmpFromTCS);


    tcsEmployee.forEach((employee)=>{


       console.log(`Company Name: ${employee.emp_company} || Employee Name: ${employee.emp_name}`);
    })
   

    console.log(`--------------------------------------------------------------`);

    const empWipro = arrayEmployee.filter((employee) => {

        return employee.emp_company=="Wipro";

    })

    const empSalary =empWipro.map((employee)=> {

      return  employee.emp_salary;


    })
  console.log(`Salary Details Of Wipro Employee: ${empSalary}`);
  console.log(`----------------------------------------------------------------------------------`);
var sum=0

empSalary.forEach((value)=>{

    sum=sum+value/2;
})
console.log(`Average Salary Of Employee From Wipro: ${sum}`);

console.log(`----------------------------------------------------------------------------------`);

const empWiInfy= arrayEmployee.filter((employee)=>{

 return  employee.emp_company=="Wipro" || employee.emp_company=="Infy";
})

const empSalaries = empWiInfy.map((value)=>{

 return value.emp_salary;

})
console.log(`Salary Details Of Employee From Wipro Or Infy: ${empSalaries}`);

console.log(`-----------------------------------------------------------------------------------`);

var sum=0;
empSalaries.forEach((value)=>{

  

  sum=sum+value/4;
})

console.log(`Average Salary Of Employee From Wipro Or Infy: ${sum}`);
console.log(`----------------------------------END-------------------------------------------------`);