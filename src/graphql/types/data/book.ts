import type { Book } from '../../../types/Book';

export interface AllBooksData {
  allBooks: Book[];
}

export interface AllGenresData {
  allBooks: GenresBookData[];
}

interface GenresBookData {
  genres: string[];
}

export interface AddBookData {
  addBook: Book;
}
