import React from 'react';
import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    return (
        <section className="search-container">
            <button className="search-container-button"><FontAwesomeIcon icon={faSearch} /></button>
            <input className="search-container-input" placeholder="Busca tu comunidad" />
        </section>
    );
}

export default Search;