import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

import "./NavBar.scss";

import searchIcon from './../../Assets/Icons/icons-search.svg';

function NavBar() {

    let navigate = useNavigate();
    const [searchTerms, setSearchTerms] = useState("");

    const handleChange = (e) => {
        setSearchTerms(e.target.value.trim().replaceAll(' ', '%20'));
    }

    const handleSubmit = (e) => {
       e.preventDefault();

        navigate(`/?search=${searchTerms}`);
    }

    return(
        <nav className="navbar__container">
            <form className="navbar__search-form" onSubmit={(e) => {handleSubmit(e)}}>
                <input 
                    className="navbar__input-box"
                    placeholder="e.g. Harvard Classics"
                    onChange={(e) => {handleChange(e)}}>
                </input>
                <Link to={ { pathname: '/', search: `?search=${searchTerms}`}}>
                    <div className="navbar__input-submit">
                        <img alt="Search icon" className="navbar__input-search-icon" src={searchIcon}></img>
                    </div>
                </Link>
            </form>
        </nav>
    );
}

export default NavBar;