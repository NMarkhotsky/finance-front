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

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [date]);

  const handleItemClick = (index) => {
    setActiveIndex(index);
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
              activeIndex={activeIndex}
              activeTab={activeTab}
              date={date}
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
