import PropTypes from "prop-types";
import { useState } from "react";
import { ListCategories } from "./CategoriesList.styled";
import { CategoriesItem } from "../CategoriesItem/CategoriesItem";

export const CategoriesList = ({
  categoriesList,
  categories,
  activeTab,
  addItemCategory,
}) => {
  const [itemsActiveState, setItemsActiveState] = useState(
    new Array(categoriesList.length).fill(false)
  ); 

  if (
    categoriesList.length > 0 &&
    !itemsActiveState.some((isActive) => isActive)
  ) {
    setItemsActiveState((prev) => {
      const updatedState = [...prev];
      updatedState[0] = true;
      return updatedState;
    });
  }

  const handleItemClick = (index) => {
      setItemsActiveState((prev) => {
        const updatedState = [...prev];
        updatedState.fill(false);
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
            activeTab={activeTab}
            addItemCategory={addItemCategory}
          />
        );
      })}
    </ListCategories>
  );
};

CategoriesList.propTypes = {
  categoriesList: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  addItemCategory: PropTypes.func.isRequired
};
