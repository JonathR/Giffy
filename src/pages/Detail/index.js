import React from 'react';
import { Redirect } from 'wouter';
import Gif from 'components/Gif/Gif';
import useSingleGif from 'hooks/useSingleGif';
import Spinner from 'components/Spinner';

export default function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  if (isLoading) return <Spinner />;
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <Spinner>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />;
    </Spinner>
  );
}
