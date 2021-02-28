import { useGifs } from 'hooks/useGifs';
import { useEffect } from 'react';
import { useState } from 'react';
import getSingleGif from 'services/getSingleGif';

export default function useSingleGif({ id }) {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find((useSingleGif) => useSingleGif.id === id);

  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(
    function () {
      if (!gif) {
        setIsLoading(true);
        //lamar al servicio si no tenemos gifs
        getSingleGif({ id })
          .then((gif) => {
            setGif(gif);
            setIsLoading(false);
            setIsError(false);
          })
          .catch((err) => {
            setIsLoading(false);
            setIsError(true);
          });
      }
    },
    [gif, id]
  );

  return { gif, isLoading, isError };
}
