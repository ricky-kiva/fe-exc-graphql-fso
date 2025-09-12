import React from "react";

interface Book {
  title: string;
  author: string;
  published: number;
}

interface BooksProps {
  show: boolean;
}

const Books: React.FC<BooksProps> = (props) => {
  if (!props.show) {
    return null;
  }

  const books: Book[] = [];

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
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
