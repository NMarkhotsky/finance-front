import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [itemCategory, setItemCategory] = useState({});
  const [hasCategories, setHasCategories] = useState(false);

  const setCategory = (category) => {
    setItemCategory(category);
  };


  useEffect(() => {
    // Перевірка, чи список категорій не порожній
    setHasCategories(Boolean(Object.keys(itemCategory).length));
  }, [itemCategory]);

  return (
    <MyContext.Provider
      value={{ itemCategory, setCategory, hasCategories, setHasCategories }}
    >
      {children}
    </MyContext.Provider>
  );
};
// eslint-disable-next-line
export const useMyContext = () => {
  return useContext(MyContext);
};

MyContextProvider.propTypes = {
  children: PropTypes.any,
};


