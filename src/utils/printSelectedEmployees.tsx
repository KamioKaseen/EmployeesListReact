export function printSelectedEmployees(employeesContainer: HTMLElement) {
  const printWindow = window.open('', '', 'height=600,width=800');
  if (printWindow) {
    printWindow.document.write('<html><head><title>Список сотрудников</title>');
    printWindow.document.write('<style>ol { list-style-type: decimal; }</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(employeesContainer.outerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.onafterprint = () => {
      printWindow.close();
    };
    printWindow.print();
  }
}
