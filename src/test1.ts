import * as functions from './functions/student.functions';
import { IStudent } from './types/student.types';

const students: IStudent[] = [];

students.push({
  name: 'Sirius',
  numberOfScippedHW: 1,
});

students.push({
  name: 'Eri',
  numberOfScippedHW: 0,
});

students.forEach((student) => console.log(functions.getStudentInfo(student)));
