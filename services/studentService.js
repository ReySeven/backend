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
<<<<<<< HEAD
    const updatedStudent = await studentModel.update(student);
    return updatedStudent;
=======
    const updatedStudents = await studentModel.update(student);
    return updatedStudents;
>>>>>>> 3101097bbde1c77479ed28c24cfb3e183c64d31d
}

//delete
export const deleteStudents = async (id) => {
<<<<<<< HEAD
    const deleteStudent = await studentModel.remove(id);

    return deleteStudent;
}
=======
    const deletedStudents = await studentModel.remove(id);

    return deletedStudents;
};
>>>>>>> 3101097bbde1c77479ed28c24cfb3e183c64d31d
