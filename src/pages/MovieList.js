import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Card } from "../components";
export const MovieList = () => {
  const [movies ,setMovies ]= useState([]) ;
  useEffect(() => {
    
    async function fetchMovie() {
       const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=b13be72e1e2c3a097c8a40da8b36196f') ;
       const data = await response.json() ;
      console.log(data); 
      setMovies(data.results) 
    }
    fetchMovie() ;
  }, [])
  
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center  flex-wrap">
          {movies.map((movie, index) =>( <Card key={movie.id}  movie = {movie}/> ))}
        </div>
      </section>
    </main>
  );
};
