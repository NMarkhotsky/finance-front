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

  const [activeCategory, setActiveCategory] = useState(categoriesList[0]?.category);
  const [categoryList, setCategoryList] = useState(categoriesList); 

  const { setHasCategories } = useMyContext();

  useEffect(() => {
    if(categoryList.length === 0) {
      setHasCategories(true); 
    }
  })
//   useEffect(() => {
// if(categoryList !== categoriesList) {
//   setCategoryList(categoriesList); 
// }

// const hasActiveCategory = categoriesList.some(item => item.category === activeCategory);
//       if (!hasActiveCategory) {
//         setActiveCategory(categoriesList[0]?.category);
//       }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [date, categoriesList])

useEffect(() => {
  if (JSON.stringify(categoryList) !== JSON.stringify(categoriesList)) {
    setCategoryList(categoriesList);
  }

  const hasActiveCategory = categoriesList.some(item => item.category === activeCategory);
  if (!hasActiveCategory) {
    setActiveCategory(categoriesList[0]?.category);
  }
}, [date, categoriesList, categoryList, activeCategory]);

  const handleItemClick = (category) => {
    setActiveCategory(category);
  };

  return (

      <ListCategories>
        {categoryList.map((item, idx) => {
  
    const categoryObject = categories.find(
      (category) => category.value === item.category
    );

          return (
            <CategoriesItem
              key={idx}
              index={idx}
              item={item}
              categoryObject={categoryObject}
              handleItemClick={(index, category) => handleItemClick(index, category)}
              activeTab={activeTab}
              date={date}
              isActive={item.category === activeCategory}
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
