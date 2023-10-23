console.log(`====================Assignment 2- Reduce Method=========================`);

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monica = new Employee(77, "Monica", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];
const arrayCompany = arrayEmps.filter((employee) =>{
    return employee.emp_company == "Wipro";
} ).map ((employee) => {
    return employee.emp_name;
})
console.log(`The Employee from the Wipro Company is : ${arrayCompany}`);
const arrayDepartment = arrayEmps.filter((employee) =>{
    return employee.emp_dept == "IT" || employee.emp_dept == "HR";
} ).map ((employee) => {
    return employee.emp_name;
})
console.log(`The Employee from the "IT"  & "HR" Department is : ${arrayDepartment}`);

const arrayId = arrayEmps.filter((employee) =>{
    return employee.emp_id > 50;
} ).map ((employee) => {
    return employee.emp_name;
})
console.log(`The Employee ID are Greater than 50  is : ${arrayId}`);
const arrayNames = arrayEmps.filter( (employee) => {
    return employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M");
}).map( (employee) => {
    return employee.emp_name;
})
console.log(`The Employee Name Starts With 'A' , 'V', 'M' is : ${arrayNames}`);
const empsalary = arrayEmps.filter( (employee) => {
    return employee.emp_salary;
}).map( (employee) => {
    return employee.emp_salary
})

let totalSalary = empsalary.reduce( (runningTotal, value, index) => {
    runningTotal = runningTotal + value;

    return runningTotal;
})
console.log(`The salary of All Department is : ${empsalary}`);  
const average = totalSalary / empsalary.length;
console.log(`The Average Salary of All Department is : ${average}`);

const arraySalaryIT = arrayEmps.filter( (employee) => {
    return employee.emp_dept == "IT";
}).map( (employee) => {
    return employee.emp_salary;
})
let avrgSalary = 0;
salaryAverage = arraySalaryIT.reduce((runningTotal, value, index) => {
    runningTotal = runningTotal + value;
    if (index == arraySalaryIT.length -1 ) {
        avrgSalary = runningTotal / arraySalaryIT.length;
    }
    return runningTotal;
})
console.log(`The salary from the "IT" Department is : ${arraySalaryIT}`);
console.log(`The Average Salary from the "IT" Department is : ${avrgSalary}`);