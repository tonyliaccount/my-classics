import "./Book.scss";

function Book(props) {

    return(
        <div className="book__container">
            <img width="250" height="353" className="book__image" alt="book cover" src={props.cover}/>
            <div className="book__caption">{props.title}</div>
        </div>
    );
}

export default Book;