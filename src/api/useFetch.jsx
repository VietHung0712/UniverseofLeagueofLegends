import { useState, useEffect } from 'react';
import { fetchData } from './fetchAPI';

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const timer = setTimeout(() => {
      const fetchAPI = async () => {
        try {
          const result = await fetchData(endpoint);
          if (isMounted) {
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
