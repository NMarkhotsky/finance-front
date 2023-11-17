import PropTypes from "prop-types";
import { useState } from "react";
import { ListCategories } from "./CategoriesList.styled";
import { CategoriesItem } from "../CategoriesItem/CategoriesItem";

const resetActiveState = (items, setItemsActiveState) => {
    const updatedItems = items.map(() => false);
    setItemsActiveState(updatedItems);
  };

export const CategoriesList = ({ categoriesList, categories }) => {
    const [itemsActiveState, setItemsActiveState] = useState(
        new Array(categoriesList.length).fill(false)
      );
    
      const handleItemClick = (index) => {
        resetActiveState(categoriesList, setItemsActiveState);
        setItemsActiveState((prev) => {
          const updatedState = [...prev];
          updatedState[index] = true;
          return updatedState;
        });
      };

  return (
    <ListCategories>
      {categoriesList.map((item, idx) => {
        const categoryObject = categories.find(
          (category) => category.value === item.category
        );

        return (
          <CategoriesItem
            key={idx}
            index={idx}
            item={item}
            categoryObject={categoryObject}
            handleItemClick={handleItemClick}
            isActive={itemsActiveState[idx]}
          />
        );
      })}
    </ListCategories>
  );
};

CategoriesList.propTypes = {
  categoriesList: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};
