import React from "react";
import Card from "./Card";

const MovieGrid = ({movies}) =>{
    return(
        <div className="movie-grid">
            {movies.map(movie => (
                <Card key={movie.id} movie={movie}/>
            ))}

        </div>
    );
};
export default MovieGrid;
