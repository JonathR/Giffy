import React, { useEffect } from 'react';
import getTrendingTerms from '../../services/getTrendingTermsService';

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTrendingTerms().then(setTrends);
  }, []);

  return;
}
