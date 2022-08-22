import { useEffect, useState } from "react";
import axios from 'axios';

import Book from "./../Book/Book.jsx";

import "./BookShelf.scss";

function BookShelf() {

    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {

        const fetchBook = async() => {
            const response = await axios.get('http://localhost:8080/books');

            console.log(response.data);
            setBookshelf(response.data);
        }

        fetchBook().catch(error =>{
            console.log(error)
        });

    }, []);

    return (
        <div className="bookshelf__container">
            {
                bookshelf?.results?.map( book => {

                    const modifiedCover = book.formats["image/jpeg"].replace(".small", ".medium");
                    const modifiedTitle = book.title.length < 39 ? book.title : book.title.substring(0,38) + "...";
                    
                    console.log(modifiedTitle);
                    console.log(modifiedCover);
                    return(
                    <Book
                        key={book.id}
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