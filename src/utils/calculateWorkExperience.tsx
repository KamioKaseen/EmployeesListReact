
export function calculateWorkExperience(startDate: Date) {
  const now = new Date();
  const years = now.getFullYear() - startDate.getFullYear();
  const months = now.getMonth() - startDate.getMonth();

  const totalMonths = years * 12 + months;
  return (totalMonths / 12).toFixed(1);
}