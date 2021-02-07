import React from 'react';
import { Link } from 'wouter';

const POPULAR_GIFS = ['Matrix', 'Chile', 'HunterxHunter', 'Ecuador'];

export default function Home() {
  return (
    <>
      <h3 className="App-title">Los gifs màs populares</h3>
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
