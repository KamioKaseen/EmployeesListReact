interface Employee {
  firstName: string;
  lastName: string;
  position: string;
  subordinates?: Employee[] | null;
}

export function employeesFilter(data: Employee[]): Employee[] {
  const employees: Employee[] = [];
  const uniqueEmployees = new Set<string>();

  function getEmployeeKey(employee: Employee): string {
    return `${employee.firstName}-${employee.lastName}-${employee.position}`;
  }

  function traverse(employeeList: Employee[]) {
    employeeList.forEach(employee => {
      const key = getEmployeeKey(employee);
      if (!uniqueEmployees.has(key)) {
        uniqueEmployees.add(key);
        employees.push({ ...employee, subordinates: null });
      }
      if (employee.subordinates) {
        traverse(employee.subordinates);
      }
    });
  }

  traverse(data);
  return employees;
}
