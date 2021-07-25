import React, { useState } from "react";

const ThemeContext = React.createContext(null);

export function ThemeContextProvider({ children }) {
  const [context, setContext] = useState({
    openMenu: false,
  });
  return (
    <ThemeContext.Provider value={{ context, setContext }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
