import { useState } from "react";

function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        onSubmit(book.id, title);
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