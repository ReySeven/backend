import * as studentModel from '../models/studentModel.js';

export const fetchAllStudent = async() =>{
    const student = await studentModel.fetch();
    return student;
}

 export const createStudents = async (student) => {
    const studentId = await studentModel.insert(student);

    return studentId;
};

//update
export const updateStudents = async(student) =>{
    const updatedStudent = await studentModel.update(student);
    return updatedStudent;
}

//delete
export const deleteStudents = async (id) => {
    const deleteStudent = await studentModel.remove(id);

    return deleteStudent;
}