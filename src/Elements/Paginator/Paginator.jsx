import { Link } from 'react-router-dom';

import "./Paginator.scss";

function Book(props) {

    return(
        <section className="paginator">
            {
                props.previousPage !== null && 
                <Link to={ { pathname: '/', search: props.previousPage}} style={{ textDecoration: 'none' }}>
                    <div className="paginator__page paginator__page-prev">{`<`}</div>
                </Link>
            }
            <div className="paginator__page paginator__page-curr">{props.currentPage}</div>
            {
                props.nextPage !== null && 
                <Link to={ { pathname: '/', search: props.nextPage}} style={{ textDecoration: 'none' }}>
                    <div className="paginator__page paginator__page-next">{`>`}</div>
                </Link>
            }
        </section>
    );
}

export default Book;