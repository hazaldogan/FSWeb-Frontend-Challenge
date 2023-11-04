import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const readFromLS = () => {
    return JSON.parse(localStorage.getItem(key));
  };

  const [value, setValue] = useState(() => {
    const IsOrDie = readFromLS() !== null ? readFromLS : initialValue;
    localStorage.setItem(key, JSON.stringify(IsOrDie));
    return IsOrDie;
  });

  const writeToLSandState = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, writeToLSandState];
}
