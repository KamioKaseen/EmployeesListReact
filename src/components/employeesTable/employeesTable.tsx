import styles from './styles.module.scss';
import { Employee } from '../../types/types';
import { calculateWorkExperience } from '../../utils/calculateWorkExperience';

interface EmployeesTableProps {
  selectedEmployees: Employee[];
  availableEmployees: Employee[];
  setSelectedEmployees: (employees: Employee[]) => void;
}

export const EmployeesTable: React.FC<EmployeesTableProps> = ({
  availableEmployees,
  selectedEmployees,
  setSelectedEmployees,
}) => {
  

  const handleCheckboxChange = (employee: Employee, isChecked: boolean) => {
    setSelectedEmployees(prev => {
      if (isChecked) {
        if (!prev.some(e => e.firstName === employee.firstName && e.lastName === employee.lastName && e.position === employee.position)) {
          return [...prev, employee];
        }
      } else {
        return prev.filter(e => !(e.firstName === employee.firstName && e.lastName === employee.lastName && e.position === employee.position));
      }
      return prev;
    });
  };

  const isEmployeeSelected = (employee: Employee) =>
    selectedEmployees.some(e =>
      e.firstName === employee.firstName && e.lastName === employee.lastName && e.position === employee.position
    );

  return (
    <div className={styles.tableContainer}>
      <table className={styles.modal__table}>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Позиция</th>
            <th>Дата приема</th>
            <th>Стаж</th>
            <th>Выбрать</th>
          </tr>
        </thead>
        <tbody>
          {availableEmployees.map((employee) => (
            <tr
              key={`${employee.firstName}-${employee.startDate.toLocaleDateString()}-${employee.position}-`} 
              className={isEmployeeSelected(employee) ? styles.selected : ''}
            >
              <td>{`${employee.lastName} ${employee.firstName}`}</td>
              <td>{employee.position}</td>
              <td>{employee.startDate.toLocaleDateString()}</td>
              <td>{calculateWorkExperience(employee.startDate)}</td>
              <td>
                <input
                  type="checkbox"
                  checked={isEmployeeSelected(employee)}
                  onChange={(e) => handleCheckboxChange(employee, e.target.checked)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
