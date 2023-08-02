import { useState } from 'react';
import Cookies from 'js-cookie';

export const useCookies = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = Cookies.get(keyName);
      if (value) {
        return value;
      }
      Cookies.set(keyName, defaultValue);
      return defaultValue;
    } catch (error) {
      return defaultValue;
    }
  });
  const setValue = (newValue) => {
    try {
      Cookies.set(keyName, newValue);
    } catch (error) {
      console.log(error);
    }
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};
