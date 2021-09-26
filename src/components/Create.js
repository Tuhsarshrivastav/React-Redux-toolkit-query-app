import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useCreateBookMutation } from "../app/services/bookService";
const Create = () => {
  const { push } = useHistory();
  const [createBook, data] = useCreateBookMutation();
  const [state, setState] = useState({
    name: "",
    author: "",
  });
  const handle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const createNewBook = async (e) => {
    e.preventDefault();
    await createBook(state);
    push("/");
  };

  return (
    <>
      <div className="container">
        <h3 style={{ marginBottom: "15px" }}>Create new book</h3>
        <form onSubmit={createNewBook}>
          <input
            type="text"
            name="name"
            placeholder="Book name"
            onChange={handle}
            value={state.name}
            required
          />
          <input
            type="text"
            name="author"
            onChange={handle}
            value={state.author}
            placeholder="Book author"
            required
          />
          <button type="submit">create new book</button>
        </form>
      </div>
    </>
  );
};

export default Create;
