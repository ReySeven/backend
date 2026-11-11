import * as bookController from '../controllers/bookController.js';
import express from "express";

const bookRoute = express.Router();

<<<<<<< HEAD
bookRoute.get('/', bookController.fetchAllBooks);
bookRoute.post('/', bookController.createBooks);
bookRoute.put('/:id',bookController.editBooks);
bookRoute.delete('/:id', bookController.deleteBooks);
=======
bookRoutes.get('/', bookController.fetchAllBooks);
bookRoutes.post('/', bookController.createBook);
bookRoutes.put('/:id',bookController.editBooks);
bookRoutes.delete('/:id', bookController.deleteBooks);
>>>>>>> 3101097bbde1c77479ed28c24cfb3e183c64d31d

export default bookRoute;