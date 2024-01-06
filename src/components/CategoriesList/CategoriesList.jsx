import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ListCategories } from "./CategoriesList.styled";
import { CategoriesItem } from "../CategoriesItem/CategoriesItem";
import { useMyContext } from "../../utils";

export const CategoriesList = ({
  categoriesList,
  categories,
  activeTab,
  date
}) => {

  const [activeIndex, setActiveIndex] = useState(0); 

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
              // handleItemClick={(index, category) => handleItemClick(index, category)}
              activeTab={activeTab}
              date={date}
              // isActive={item.category === activeCategory}
              isActive={idx === activeIndex}
              setActiveIndex={setActiveIndex}
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
