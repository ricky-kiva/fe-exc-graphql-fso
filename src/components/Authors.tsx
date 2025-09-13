import { useQuery } from '@apollo/client/react';
import React from "react";
import Author from '../types/Author';
import { AllAuthorsData } from '../graphql/types/author';
import { ALL_AUTHORS } from '../graphql/operations/author';

interface AuthorsProps {
  show: boolean;
}

const Authors: React.FC<AuthorsProps> = (props) => {
  const result = useQuery<AllAuthorsData>(ALL_AUTHORS, {
    skip: !props.show
  });

  if (!props.show) return null;

  if (result.loading) {
    return <div>Loading..</div>;
  }

  if (!result.data) {
    return <div>Failed to fetch Authors data</div>;
  }

  const authors: Author[] = result.data?.allAuthors;

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Authors;
