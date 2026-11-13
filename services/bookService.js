import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async () => {
    return await bookModel.fetch();
};

export const createBook = async (book) => {
    return await bookModel.insert(book);
};

// Update
export const updateBooks = async (book) => {
    return await bookModel.update(book);
};

// Delete
export const deleteBooks = async (id) => {
    return await bookModel.remove(id);
};


//test update