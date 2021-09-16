import React, { useState } from 'react';

function SearchMovie() {
    //states- input query,movies
    const [query, setQuery] =useState('');
    
    //create the state for movies and update that state  appropriately.
    const [movies, setMovies] =useState([]);

    const searchMovies= async(e)=>{
        e.preventDefault();
     console.log('submitting');
     //const query='Jurassic Park';

    //const url= `https://api.themoviedb.org/3/movie/550?api_key=c84c8884b8de590025943721620b2ce2&language=en-US&query=${query}include_adult=false`;
   try{
    const res= await fetch(url)
    const data= await res.json();
    setMovies(data.results);
    }catch(err){
        console.error(err);
    }
}
    return (
        <>
        <form className='form' onSubmit={searchMovies}>
            <label className='label' htmlFor='query'>Movie name</label>
            <input className='input' type='text' name='query' placeholder='i-e Jurassic Park' value={query} onChange={(e)=>setQuery(e.target.value)}/>
            <button className='button' type='submit' >Search</button>
        </form>
        <div className='card-list'>
            {movies.map(movie => movie.title)}

        </div>
        </>
    )
}

export default SearchMovie
