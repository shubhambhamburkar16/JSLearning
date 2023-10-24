console.log(`==========Assignment - Sorting Ascending & Descending Order=======`);
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
    
    
    const arrayEmployees = [emp_anil,emp_radha, emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
    console.log(`--------------step 1 - Sorting the Array in Descending Order------------`);
     const newArray = arrayEmployees.sort((emp1, emp2) => {
        return emp1.emp_id > emp2.emp_id? -1 : 1;
    });
     arrayEmployees.forEach((currentValue, index, value) => {
    console.log(` Employee ID : ${currentValue.emp_id}  Employee Name : ${currentValue.emp_name}  Employee Department : ${currentValue.emp_dept}`);
    });
    console.log(`-------------------------------------------------------------------------------------------------------------------------`);
    console.log(`-------------step 2 - Sorting the Array in Ascending Order--------------`);
     const newArray1 = arrayEmployees.sort((emp1, emp2) => {
        return emp1.emp_id > emp2.emp_id? 1 : -1;
    });
     arrayEmployees.forEach((currentValue, index, value) => {
    console.log(` Employee ID : ${currentValue.emp_id}  Employee Department : ${currentValue.emp_dept}  Employee Company : ${currentValue.emp_company}`);
    });
    console.log(`-------------------------------------------------------------------------------------------------------------------------`);
    console.log(`-------------step 2 - Sorting the Array in Ascending Order--------------`);
     const newArray2 = arrayEmployees.sort((emp1, emp2) => {
        return emp1.emp_id > emp2.emp_id? -1 : 1;
    });
     arrayEmployees.forEach((currentValue, index, value) => {
    console.log(` Employee Name : ${currentValue.emp_name}  Employee Salary : ${currentValue.emp_salary}  Employee Company : ${currentValue.emp_company}`);
    });
    console.log(`--------------------------------------------------END-----------------------------------------------------------------------`);