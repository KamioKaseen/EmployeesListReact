import { useRef, useState } from 'react';
import styles from './styles.module.scss'
import { Employee } from '../../types/types';
import EmployeesList from '../employeesList/employessList';
import { Button } from '../button/button';
import { Modal } from '../modal/modal';
import { saveEmployeesList } from '../../utils/saveEmployessList';

export const Container = () => {
  const [modalIsActive, setModalIsActive] = useState<boolean>(false);
  const [displayedEmployees, setDisplayedEmployees] = useState<Employee[]>([]);
  const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([]);

  const employeesListRef = useRef<{ print: () => void }>(null);

  const showMessage = () => {
    alert('Список пуст');
  };

  const handleShowModal = () => {
    setModalIsActive(true);
  };

  const handleCloseModal = () => {
    setModalIsActive(false);
  };

  const handleClearEmployeesList = () => {
    setDisplayedEmployees([]);
  };

  const handlePrintEmployeesList = () => {
    if (employeesListRef.current) {
      employeesListRef.current.print();
    } else {
      showMessage();
    }
  };

  const handleSaveListToFile = () => {
    if (displayedEmployees.length > 0) {
      saveEmployeesList(displayedEmployees, 'employees_list.htm');
    } else {
      showMessage();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonsContainer}>
        <Button 
          title='Выбрать сотрудников' 
          onClick={handleShowModal} />
        <Button 
          onClick={handlePrintEmployeesList} 
          title='Печать списка' />
        <Button 
          title='Очистить список' 
          onClick={handleClearEmployeesList} />
        <Button 
          onClick={handleSaveListToFile} 
          title='Сохранить файл' />
      </div>
      
      <p className={styles.container__text}>
        {displayedEmployees.length === 0 ? 'Нет выбранных сотрудников' : 'Выбранные сотрудники'}
      </p>

      {displayedEmployees.length > 0 && (
        <EmployeesList
          ref={employeesListRef}
          displayedEmployees={displayedEmployees}
        />
      )}

      <Modal
        selectedEmployees={selectedEmployees}
        displayedEmployees={displayedEmployees}
        setDisplayedEmployees={setDisplayedEmployees}
        setSelectedEmployees={setSelectedEmployees}
        isOpen={modalIsActive}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Container;
