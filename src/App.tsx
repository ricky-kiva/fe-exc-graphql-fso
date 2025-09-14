import { useEffect, useState } from "react";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import Login from './components/Login';
import { useApolloClient } from '@apollo/client/react';

const App: React.FC = () => {
  const [page, setPage] = useState<string>("authors");
  const [token, setToken] = useState<string | null>(null);

  console.log(token);

  const client = useApolloClient();

  const logout = () => {
    setToken(null);
    localStorage.clear();
    client.resetStore();
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("user-token");
    if (savedToken) setToken(savedToken);
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        {!token && <button onClick={() => setPage("login")}>login</button>}
        {token && <button onClick={() => setPage("add")}>add book</button>}
        {token && <button onClick={logout}>logout</button>}
      </div>

      <Authors show={page === "authors"} />
      <Books show={page === "books"} />
      <Login show={page === "login"} setToken={setToken} />
      <NewBook show={page === "add"} />
    </div>
  );
};

export default App;
