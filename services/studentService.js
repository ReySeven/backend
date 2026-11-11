import * as studentModel from '../models/studentModel.js';

export const fetchAllStudent = async () => {
    return await studentModel.fetch();
};

export const createStudents = async (student) => {
    return await studentModel.insert(student);
};

// Update
export const updateStudents = async (student) => {
    return await studentModel.update(student);
};

// Delete
export const deleteStudents = async (id) => {
    return await studentModel.remove(id);
};
