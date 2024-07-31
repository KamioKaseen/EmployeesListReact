import { Employee } from "../types/types";

interface EmployeeData {
  firstName: string;
  lastName: string;
  position: string;
  startDate: Date;
  email: string | null;
  subordinates?: EmployeeData[] | null;
}

export function employeesFilter(data: EmployeeData[]): Employee[] {
  const seenKeys = new Set<string>();

  function getEmployeeKey(employee: EmployeeData): string {
    return `${employee.firstName}-${employee.lastName}-${employee.position}`;
  }

  function recursion(employeeList: EmployeeData[]): Employee[] {
    return employeeList.flatMap(({ subordinates, ...employee }) => {
      const key = getEmployeeKey(employee);
      if (!seenKeys.has(key)) {
        seenKeys.add(key);
        return [employee, ...recursion(subordinates || [])];
      }
      return recursion(subordinates || []);
    });
  }

  return recursion(data);
}

