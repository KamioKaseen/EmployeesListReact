import { Employee } from "../types/types";

export const saveEmployeesList = (employees: Employee[]) => {
  const htmlContent = 
    `<ol>
        ${employees.map(e => `
          <li>
            ${e.lastName} ${e.firstName}, ${e.position}${e.email ? `, ${e.email}` : ''}
          </li>
        `).join('')}
      </ol>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'employees.htm';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
