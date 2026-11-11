import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async() =>{
    const books = await bookModel.fetch();
    return books;
}

export const createBook = async (book) => {
    const bookId = await bookModel.insert(book);

    return bookId;
};

//update
<<<<<<< HEAD
export const updateBooks = async(book) =>{
=======
export const updateBooks = async(student) =>{
>>>>>>> 3101097bbde1c77479ed28c24cfb3e183c64d31d
    const updatedBooks = await bookModel.update(book);
    return updatedBooks;
}

//dlelete
export const deleteBooks = async (id) => {
    const deletedBooks = await bookModel.remove(id);

    return deletedBooks;
};