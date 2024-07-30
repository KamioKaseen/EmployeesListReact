import { DisplayedEmployee } from "../types/types";

export const saveEmployeesList = (employees: DisplayedEmployee[], fileName: string) => {
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
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}
