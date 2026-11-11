import * as studentService from '../services/studentService.js';

export const fetchAllStudents = async (req, res) =>{
    const student = await studentService.fetchAllStudent();
    res.status(200).json(student);
}

export const createStudents = async (req, res) => {
    console.log(req);

    const { name, srcode, program } = req.body;
    const student = { name, srcode, program };

    try {
        const studentId = await studentService.createStudents(student);

        res.status(200).json({
            success: true,
            message: studentId
        });

    } catch (e) {
        console.log(e);

        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

//update

export const editStudents = async (req, res) => {
    const { name, srcode, program } = req.body;
    const { id } = req.params;

    const student = {
        id: parseInt(id),
        name,
        srcode,
        program,
    };

    try {
        const updateStudents = await studentService.updateStudents(student);

        res.status(200).json({
            success: true,
            message: updateStudents
        });

    } catch (e) {
        console.log(e);

        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

// Delete
export const deleteStudents = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedStudents = await studentService.deleteStudents(parseInt(id));

        res.status(200).json({
            success: true,
            message: deletedStudents
        });

    } catch (e) {
        console.log(e);

        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};