import Book from "./../Book/Book.jsx";

import "./BookShelf.scss";

function BookShelf() {

    return (
        <div className="bookshelf__container">
            <Book></Book>
            <Book></Book>
            <Book></Book>
            <Book></Book>
            <Book></Book>
            <Book></Book>
            <Book></Book>
            <Book></Book>
            <Book></Book>
        </div>
    );
}

export default BookShelf;