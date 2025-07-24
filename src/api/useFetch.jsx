import { useState, useEffect } from 'react';
import { fetchData } from './fetchAPI';

const cache = {};

export const useFetch = (endpoint) => {
  const [data, setData] = useState(cache[endpoint] || []);
  const [loading, setLoading] = useState(!cache[endpoint]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    if (cache[endpoint]) {
      setData(cache[endpoint]);
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      const fetchAPI = async () => {
        try {
          const result = await fetchData(endpoint);
          if (isMounted) {
            cache[endpoint] = result;
            setData(result);
            setError(null);
          }
        } catch (err) {
          if (isMounted) {
            setError(err);
            setData([]);
          }
        } finally {
          if (isMounted) setLoading(false);
        }
      };

      fetchAPI();
    }, 200);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [endpoint]);

  return { data, loading, error };
};
