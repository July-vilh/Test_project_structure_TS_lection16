"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentInfo = getStudentInfo;
function getStudentInfo(student) {
    return `Student ${student.name} skipped ${student.numberOfScippedHW} homeworks`;
}
