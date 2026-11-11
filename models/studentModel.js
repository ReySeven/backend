import pool from '../config/db.js';

export const fetch = async () => {
    const [rows] = await pool.query("SELECT * FROM student");
    return rows;
};

 export const insert = async (student) => {
    const [result] = await pool.query(
        "INSERT INTO student (name, srcode, program) VALUES (?, ?, ?)",
        [student.name, student.srcode, student.program]
    );

    return result.insertId;
};

// Update 
<<<<<<< HEAD
export const update = async (student) => {
    const [result] = await pool.query(
        "UPDATE student SET name = ?, srcode = ?, program = ? WHERE id = ?",
=======
export const update = async () => {
    const [result] = await pool.query(
        "UPDATE students SET name = ?, srcode = ?, program = ? WHERE id = ?",
>>>>>>> 3101097bbde1c77479ed28c24cfb3e183c64d31d
        [student.name, student.srcode, student.program, student.id]
    );

    return result.affectedRows;
};

// Delete
export const remove = async (id) => {
    const [result] = await pool.query(
<<<<<<< HEAD
        "DELETE FROM student WHERE id = ?",
=======
        "DELETE FROM students WHERE id = ?",
>>>>>>> 3101097bbde1c77479ed28c24cfb3e183c64d31d
        [id]
    );

    return result.affectedRows;
};