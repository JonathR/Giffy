import React, { useEffect } from 'react';
import getTrendingTerms from '../../services/getTrendingTermsService';
import Category from '../Category';

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category name="Trendencias" options={trends} />;
}
