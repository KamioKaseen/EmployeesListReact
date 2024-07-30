export interface Employee {
  lastName: string;
  firstName: string;
  position: string;
  startDate: Date;
  experience: string;
}

export interface DisplayedEmployee {
  lastName: string;
  firstName: string;
  position: string;
  email?: string;
}