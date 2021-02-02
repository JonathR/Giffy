import React, { useEffect, useState } from 'react';
import './App.css';

const apiURL =
  'https://api.giphy.com/v1/gifs/search?api_key=d8JABKp74yCPgprniYfLrm6H4IO206z9&q=panda&limit=10&offset=0&rating=g&lang=en';

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    fetch(apiURL)
      .then((res) => res.json())
      .then((response) => {
        const { data = [] } = response;
        if (Array.isArray(data)) {
          const gifs = data.map((image) => image.images.downsized_medium.url);
          setGifs(gifs);
        }
      });
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <img src={singleGif} />
        ))}
      </section>
    </div>
  );
}

export default App;
