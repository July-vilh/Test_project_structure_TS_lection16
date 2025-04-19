import { IStudent } from '../types/student.types';

export default class Student implements IStudent {
  constructor(
    public name: string,
    public numberOfScippedHW: number,
  ) {}
}
