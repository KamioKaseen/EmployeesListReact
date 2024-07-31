import { useImperativeHandle, forwardRef, useRef, ForwardedRef } from 'react';
import styles from './styles.module.scss'
import { printSelectedEmployees } from '../../utils/printSelectedEmployees';
import { Employee } from '../../types/types';


interface EmployeesListProps {
  displayedEmployees: Employee[];
}

interface EmployeesListHandle {
  print: () => void;
}

const EmployeesList = forwardRef<EmployeesListHandle, EmployeesListProps>(({ displayedEmployees }, ref: ForwardedRef<EmployeesListHandle>) => {
  const listRef = useRef<HTMLOListElement>(null);

  useImperativeHandle(ref, () => ({
    print: () => {
      if (listRef.current) {
        printSelectedEmployees(listRef.current);
      }
    }
  }));

  return (
    <ol className={styles.employeesList} ref={listRef}>
      {displayedEmployees.map((e) => (
        <li key={`${e.firstName}-${e.startDate.toLocaleDateString()}-${e.position}-`} >
          {`${e.lastName} ${e.firstName}`}, {e.position}
          {e.email && (
            <>
              , <a href={`mailto:${e.email}`}>{e.email}</a>
            </>
          )}
        </li>
      ))}
    </ol>
  );
});

export default EmployeesList;
