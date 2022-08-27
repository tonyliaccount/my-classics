import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

import BookShelf from './../../Elements/BookShelf/BookShelf.jsx';
import NavBar from '../../Elements/NavBar/NavBar.jsx';
import Paginator from '../../Elements/Paginator/Paginator.jsx';

import "./MainPage.scss";

function MainPage(props) {

  const [searchParams, setSearchParams] = useSearchParams();
  const [booksSearch, setBooksSearch] = useState([]);

  useEffect(() => {

    const fetchBooks = async() => {
      const queryString = searchParams.toString();

      if (queryString) {
        const response = await axios.get(`http://localhost:8080/books/?${queryString}`);
        setBooksSearch(response.data);
      } else {
        const response = await axios.get(`http://localhost:8080/books/`);
        setBooksSearch(response.data);
      }
    }

    fetchBooks().catch(error =>{
      console.log(error)
    });

  }, [searchParams]);

  return (
    <div className='main-page'>
      <NavBar></NavBar>
      <BookShelf books={ booksSearch.results }></BookShelf>
      <Paginator previousPage={booksSearch.previous} currentPage={booksSearch.page} nextPage={booksSearch.next}></Paginator>
    </div>
  );
}

export default MainPage;