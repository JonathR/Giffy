import React, { useState } from 'react';
import { useLocation } from 'wouter';

import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import { useGifs } from 'hooks/useGifs';
import TrendingSearches from 'components/TrendingSearches';

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();
  const { gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //navegar a otra ruta
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input
          placeholder="Search a git here..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
      </form>

      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última Busqueda </h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-Category">
          <TrendingSearches />
        </div>
      </div>
    </>
  );
}
