import { IStudent } from '../types/student.types';
export function getStudentInfo(student: IStudent) {
  return `Student ${student.name} skipped ${student.numberOfScippedHW} homeworks`;
}
