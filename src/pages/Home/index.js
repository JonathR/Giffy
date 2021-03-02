import React, { useCallback } from 'react';
import { useLocation } from 'wouter';
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import { useGifs } from 'hooks/useGifs';
import TrendingSearches from 'components/TrendingSearches';
import SearchForm from 'components/SearchForm';

export default function Home() {
  const [path, pushLocation] = useLocation();
  const { gifs } = useGifs();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      //navegar a otra ruta
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
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
