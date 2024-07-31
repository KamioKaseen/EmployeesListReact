import ReactDOM from 'react-dom';
import styles from './styles.module.scss';
import { Employee } from '../../types/types';
import { EmployeesTable } from '../employeesTable/employeesTable';
import { employeesFilter } from '../../utils/employeesFilter';
import { data } from '../../data/data';

interface ModalProps {
  isOpen: boolean;
  selectedEmployees: Employee[];
  displayedEmployees: Employee[];
  setSelectedEmployees: (employees: Employee[] | ((prev: Employee[]) => Employee[])) => void;
  setDisplayedEmployees: (employees: Employee[] | ((prev: Employee[]) => Employee[])) => void;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  selectedEmployees,
  displayedEmployees,
  setSelectedEmployees,
  setDisplayedEmployees,
  onClose,
}) => {
  const modalRoot = document.getElementById('modal') as HTMLElement;

  const uniqueEmployees = employeesFilter(data);
  const availableEmployees = uniqueEmployees.filter(employee =>
    !displayedEmployees.some(d =>
      d.firstName === employee.firstName && d.lastName === employee.lastName && d.position === employee.position
    )
  );

  const handleСlose = (type: 'send' | 'close') => {
    if (type === 'send') {
      setDisplayedEmployees((prev) => [...prev, ...selectedEmployees]);
    }
    setSelectedEmployees([]);
    onClose();
  };

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modal__container}>
        <button
          className={styles.modal__close}
          onClick={() => handleСlose('close')}
        >X
        </button>
        <button
          onClick={() => handleСlose('send')}
          className={styles.modal__send}
          disabled={selectedEmployees.length === 0}
        >Отправить
        </button>
        {availableEmployees.length === 0 ?
          <div className={styles.empty}><p>Сотрудники отсутствуют.</p></div> :
          <EmployeesTable
            setSelectedEmployees={setSelectedEmployees} 
            availableEmployees={availableEmployees}
            selectedEmployees={selectedEmployees}
          />
        }
      </div>
    </div>,
    modalRoot
  );
};
