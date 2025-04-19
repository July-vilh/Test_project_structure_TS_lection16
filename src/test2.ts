import studentClass from './classes/student.class';
import _ from 'lodash';
import { IStudent } from './types/student.types';

const s1 = new studentClass('Anastasia', 2);
const s2: IStudent = { name: 'Anastasia', numberOfScippedHW: 2 };
const s3: IStudent = { name: 'Anastasia', numberOfScippedHW: 2 };

console.log(_.isEqual(s1, s2));
console.log(_.isEqual(s2, s3));
