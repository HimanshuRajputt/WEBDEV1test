// Solution:1
// function highestPaid(employees) {
//     let highest = employees[0]; 
  
//     for (let i = 1; i < employees.length; i++) {
//       if (employees[i].salary > highest.salary) {
//         highest = employees[i];
//       }
//     }
  
//     return highest;
//   }
  
//   const employees = [
//     { name: "John Doe", age: 30, department: "HR", salary: 50000 },
//     { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
//     { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
//   ];
  
//   console.log(highestPaid(employees)); 
  
// SOlution:2 ===========================================

function destructuringToSwap(employees) {
    if (employees.length <= 1) {
        return employees;
      }

    let temp = employees[0];
    employees[0] = employees[employees.length - 1];
    employees[employees.length - 1] = temp;
  
    return employees;
  }
  
  const employeesToSwap = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  console.log(destructuringToSwap(employeesToSwap)); 