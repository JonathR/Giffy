import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';

const POPULAR_GIFS = ['Matrix', 'Chile', 'HunterxHunter', 'Ecuador'];

export default function Home() {
  const [Keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //navegar a otra ruta
    pushLocation(`/search/${Keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search a git here"
          onChange={handleChange}
          type="text"
          value={Keyword}
        />
        <button>Buscar</button>
      </form>

      <h3 className="App-title">Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>
              Gifs de
              {popularGif}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
