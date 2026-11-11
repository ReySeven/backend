import * as bookController from '../controllers/bookController.js';
import express from "express";

const bookRoute = express.Router();

bookRoute.get('/', bookController.fetchAllBooks);
bookRoute.post('/', bookController.createBooks);
bookRoute.put('/:id',bookController.editBooks);
bookRoute.delete('/:id', bookController.deleteBooks);

export default bookRoute;