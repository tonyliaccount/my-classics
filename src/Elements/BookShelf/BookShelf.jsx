
import Book from "./../Book/Book.jsx";

import "./BookShelf.scss";

function BookShelf(props) {

    return (
        <div className="bookshelf__container">
            {
                props.books?.map( book => {

                    const modifiedCover = book.formats["image/jpeg"] ? book.formats["image/jpeg"].replace(".small", ".medium") : "";
                    // const modifiedTitle = book.title.length < 39 ? book.title : book.title.substring(0,38) + "...";
                    
                    const modifiedTitle = book.title;

                    return(
                    <Book
                        key={book.id}
                        id={book.id}
                        cover={modifiedCover}
                        title={modifiedTitle}
                    />
                    )
                })
            }
        </div>
    );
}

export default BookShelf;