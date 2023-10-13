function calculateNetSalary(employee, taxPercent = 30) {
    const netSalary = employee.totalSalary - (employee.totalSalary * (taxPercent / 100));
    return netSalary;
  }
  const employee1 = { id: 1, totalSalary: 50000, dept: 'IT' };
  console.log(calculateNetSalary(employee1, 10)); 
  
  const employee2 = { id: 1, totalSalary: 90000, dept: 'IT' };
  console.log(calculateNetSalary(employee2)); 