import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import BookShelf from './../../Elements/BookShelf/BookShelf.jsx';
import NavBar from '../../Elements/NavBar/NavBar.jsx';

import "./MainPage.scss";

function MainPage() {

  const params = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async() => {

      if (params?.query) {
        const response = await axios.get(`http://localhost:8080/books/search/${params.query}`);

        setBooks(response.data);
      } else {
        const response = await axios.get('http://localhost:8080/books');
        setBooks(response.data);
      }
    }

    fetchBooks().catch(error =>{
      console.log(error)
    });

  }, [params]);

  return (
    <div className='main-page'>
      <NavBar></NavBar>
      <BookShelf books={ books }></BookShelf>
    </div>
  );
}

export default MainPage;