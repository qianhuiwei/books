import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";


function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);

    const { editBookById } = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, title);
    };

    return (
        <form className="book-edit" onSubmit={handleClick}>
            <label for="">Title</label>
            <input value={title} 
                    className="input" 
                    onChange={handleChange}/>
            <button className="button is-primary">
                Save
            </button>
        </form>
    );
}

export default BookEdit;