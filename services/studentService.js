import * as studentModel from '../models/studentModel.js';

export const fetchAllStudent = async() =>{
    const student = await studentModel.fetch();
    return student;
}

 export const createStudent = async (student) => {
    const studentId = await studentModel.insert(student);

    return studentId;
};

//update
export const updateStudents = async(student) =>{
    const updatedStudents = await studentModel.update(student);
    return updatedStudents;
}

//delete
export const deleteStudents = async (id) => {
    const deletedStudents = await studentModel.remove(id);

    return deletedStudents;
};