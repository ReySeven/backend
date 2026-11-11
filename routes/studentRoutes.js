import * as studentController from '../controllers/studentController.js';
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/', studentController.fetchAllStudents);

<<<<<<< HEAD
studentRoutes.post('/', studentController.createStudents);
=======
studentRoute.post('/', studentController.createStudent);

studentRoute.put('/:id', studentController.editStudents);

studentRoute.delete('/:id', studentController.deleteStudents);
>>>>>>> 3101097bbde1c77479ed28c24cfb3e183c64d31d
 
studentRoutes.put('/:id', studentController.editStudents);

studentRoutes.delete('/:id', studentController.deleteStudents);
export default studentRoutes;