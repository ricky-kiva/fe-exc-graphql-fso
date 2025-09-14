import React from "react";
import { useQuery } from '@apollo/client/react';
import { ALL_BOOKS } from '../graphql/operations/queries/book';
import type { AllBooksData } from '../graphql/types/data/book';
import type { Book } from '../types/Book';

interface BooksProps {
  show: boolean;
}

const Books: React.FC<BooksProps> = (props) => {
  const result = useQuery<AllBooksData>(ALL_BOOKS, {
    skip: !props.show
  });

  if (!props.show) return null;

  if (result.loading) {
    return <div>Loading..</div>;
  }

  if (!result.data) {
    return <div>Failed to fetch Books data</div>;
  }

  const books: Book[] = result.data?.allBooks;

  return (
    <div>
      <h2>books</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.map((a) => (
            <tr key={a.id}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
