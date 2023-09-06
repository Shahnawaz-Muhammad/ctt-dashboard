import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children } ) => {
    const [enabled, setEnabled] = useState(false);

  return (
    <ThemeContext.Provider value={{ enabled, setEnabled }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default ThemeContextProvider;
