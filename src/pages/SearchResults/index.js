import React from 'react';
import Spinner from 'components/Spinner';
import ListOfGifs from 'components/ListOfGifs';
import SearchForm from 'components/SearchForm';

import { Helmet } from 'react-helmet';

export default function SearchResults({ params }) {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title} />
            <meta name="rating" content="General" />
          </Helmet>
          <header className="o-header">
            <SearchForm initialKeyword={keyword} initialRating={rating} />
          </header>
          <div className="App-wrapper">
            <h3 className="App-title">{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs} />
            <div id="visor" ref={externalRef}></div>
          </div>
        </>
      )}
    </>
  );
}
