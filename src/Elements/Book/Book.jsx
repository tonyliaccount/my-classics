import "./Book.scss";

function Book() {

    return(
        <div className="book__container">
            <img width="250" height="355" className="book__image" alt="book cover" src="https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg"/>
        </div>
    );
}

export default Book;