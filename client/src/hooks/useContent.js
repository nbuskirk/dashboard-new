import { useEffect, useState } from 'react';

const cache = {};

export const useContent = (url) => {
  const [status, setStatus] = useState('idle');
  const [content, setContent] = useState();

  useEffect(() => {
    const abortController = new AbortController();
    if (!url) return;
    const fetchContent = async () => {
      setStatus('fetching');
      if (cache[url]) {
        const data = cache[url];
        setContent(data);
        setStatus('fetched');
      } else {
        try {
          const response = await fetch(url, { signal: abortController.signal });
          const data = await response.json();
          cache[url] = data;
          setContent(data);
          setStatus('fetched');
        } catch (e) {
          if (abortController.signal.aborted) {
            console.log(`Error: ${e.message}`);
          }
        }
      }
    };
    fetchContent();
    return () => abortController.abort();
  }, [url]);

  return {
    status,
    content
  };
};
