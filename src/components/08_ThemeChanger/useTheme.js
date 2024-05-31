import { useEffect, useState } from "react";

function useTheme(key, value) {
  const [theme, setTheme] = useState(() => {
    let currTheme;
    try {
      currTheme = JSON.parse(localStorage.getItem(key) || String(value));
    } catch (error) {
      console.log(error);
      currTheme = value;
    }
    return currTheme;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [theme]);
  return [theme, setTheme];
}

export default useTheme;
