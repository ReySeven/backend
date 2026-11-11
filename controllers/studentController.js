import * as studentService from '../services/studentService.js';

export const fetchAllStudents = async (req, res) => {
    try {
        const students = await studentService.fetchAllStudent();
        res.status(200).json(students);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const createStudents = async (req, res) => {
    const { name, srcode, program } = req.body;
    const student = { name, srcode, program };

    try {
        const studentId = await studentService.createStudents(student);
        res.status(201).json({
            success: true,
            message: studentId
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const editStudents = async (req, res) => {
    const { name, srcode, program } = req.body;
    const id = Number.parseInt(req.params.id, 10);

    if (!Number.isInteger(id)) {
        return res.status(400).json({ error: "Invalid student ID" });
    }

    const student = { id, name, srcode, program };

    try {
        const updatedStudents = await studentService.updateStudents(student);
        res.status(200).json({
            success: true,
            message: updatedStudents
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteStudents = async (req, res) => {
    const id = Number.parseInt(req.params.id, 10);

    if (!Number.isInteger(id)) {
        return res.status(400).json({ error: "Invalid student ID" });
    }

    try {
        const deletedStudents = await studentService.deleteStudents(id);
        res.status(200).json({
            success: true,
            message: deletedStudents
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
