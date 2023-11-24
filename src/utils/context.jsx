import { createContext, useContext, useState } from 'react';
import PropTypes from "prop-types";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [itemCategory, setItemCategory] = useState({});

  const setCategory = (category) => {
    setItemCategory(category);
  };

  return (
    <MyContext.Provider value={{ itemCategory, setCategory }}>
      {children}
    </MyContext.Provider>
  );
};

// eslint-disable-next-line
export const useMyContext = () => {
  return useContext(MyContext);
};

MyContextProvider.propTypes = {
  children: PropTypes.any
}
