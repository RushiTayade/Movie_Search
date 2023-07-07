import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MovieGrid from './components/MovieGrid';
// import './App.css';

const App= () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(()=>{
    fetchMovies();

  },[]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('https://hexanovate-1oc3v5uf6-thephenom1708.vercel.app/api/movies')
      setMovies(response.data);
    }
    catch (error){
      console.error('Enter fetching movies', error);

    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const fiteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="app">
      <div className="search-bar">
        <input type='text' placeholder='Search Movie' value={searchTerm} onChange={handleSearch}/>
      </div>
      <MovieGrid movies={fiteredMovies}/>
    </div>
  );
};

export default App;
