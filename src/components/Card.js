import React, {useState} from 'react';
const Card = ({movie}) => {
    const [isLiked, setIsLiked] = useState(false);
    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        < div className='card'>
            <img src={movie.poster} alt={movie.tile}/>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>IMDB rating : {movie.ratings[0]?.Value}</p>
            <p>Release Date : {movie.released}</p>
            <button className={isLiked ? 'like-button active' : 'like-button'} onClick={handleLike}>❤️</button>
            
        </div>
    );
}

export default Card;
