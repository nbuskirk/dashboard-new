import { useState } from 'react';

const cache = {};

export const usePostContent = (url, options, useCache) => {
  const [status, setStatus] = useState('idle');
  const [content, setContent] = useState();

  const abortController = new AbortController();
  const fetchOptions = {
    ...options,
    signal: abortController.signal
  };
  if (!url) return;
  const fetchContent = async () => {
    setStatus('Fetching');
    if (cache[url] && useCache) {
      const result = cache[url];
      setContent(result);
      setStatus('Fetched');
    } else {
      try {
        const response = await fetch(url, fetchOptions);
        const result = await response.json();
        cache[url] = result;
        setContent(result);
        setStatus('Fetched');
      } catch (e) {
        if (abortController.signal.aborted) {
          console.log(`Error: ${e.message}`);
        }
      }
    }
  };
  return {
    fetchContent,
    status,
    content
  };
};
