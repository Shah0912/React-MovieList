import React,{useState,useContext} from 'react'
import {MovieContext} from './MovieContext'


const Nav = (props) => {
    const [movies, setMovies] = useContext(MovieContext);
    return(
        <nav>
            <h3>Dev Ed</h3>
            <p>List of Movies: {movies.length}</p>
        </nav>
        
    );
}
export default Nav;