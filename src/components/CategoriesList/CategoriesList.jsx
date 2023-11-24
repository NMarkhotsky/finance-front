import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ListCategories } from "./CategoriesList.styled";
import { CategoriesItem } from "../CategoriesItem/CategoriesItem";

export const CategoriesList = ({
  categoriesList,
  categories,
  activeTab,
  date
}) => {
  const [itemsActiveState, setItemsActiveState] = useState([]);
  const [newDate, setNewDate] = useState(date);

  useEffect(() => {
    if (newDate !== date) {
      setNewDate(date);
    }
  }, [date, newDate]);

  useEffect(() => {
    // При зміні date, встановлюємо всі елементи в стан "false"
    setItemsActiveState((prevState) => prevState.map(() => false));
    
    // Потім встановлюємо перший елемент в "true"
    setItemsActiveState((prevState) => {
      const updatedState = [...prevState];
      updatedState[0] = true;

      if(newDate !== date) {
        updatedState[0] = false;
      }
      console.log("updatedState", updatedState);
      return updatedState;
    });
  }, [date, categories, newDate]);



  const handleItemClick = (index) => {
      setItemsActiveState((prev) => {
        const updatedState = [...prev];
        updatedState.fill(false);
        updatedState[index] = true;

        if(newDate !== date) {
          updatedState[0] = false;
        }

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
              newDate={newDate}
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
  date: PropTypes.any
};
