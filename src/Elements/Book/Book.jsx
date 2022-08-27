import { Link } from 'react-router-dom';

import "./Book.scss";

function Book(props) {

    return(
        <div className="book__container">
            <Link to = {`/book/${props.id}`} style={{ textDecoration: 'none' }}>
                <img className="book__image" alt="book cover" src={props.cover}/>
                <div className="book__caption">{props.title}</div>
            </Link>
        </div>
    );
}

export default Book;