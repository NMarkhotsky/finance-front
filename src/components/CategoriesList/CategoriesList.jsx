import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { ListCategories } from './CategoriesList.styled';
import { CategoriesItem } from '../CategoriesItem/CategoriesItem';
import { useMyContext } from '../../utils';


export const CategoriesList = ({
  categoriesList,
  categories,
  activeTab,
  date,
}) => {
  const [activeCategory, setActiveCategory] = useState(categoriesList.length !== 0 &&
    categoriesList[0]?.category
  );
  const [categoryList, setCategoryList] = useState(categoriesList);

  const { setCategory, setHasCategories } = useMyContext();

  useEffect(() => {
    if (categoriesList.length === 0) {
      setHasCategories(true);
    }
  });

  useEffect(() => {
    if (JSON.stringify(categoryList) !== JSON.stringify(categoriesList)) {
      setCategoryList(categoriesList);
    }
    const hasActiveCategory = categoriesList.some(
      item => item.category === activeCategory
    );
    if (!hasActiveCategory) {
      setActiveCategory(categoriesList[0]?.category);
    }

  }, [categoriesList, categoryList, activeCategory, date]);

  const handleItemClick = category => {
    setActiveCategory(category);
  };

  useEffect(() => {
    if (activeCategory) {
      setCategory({ activeCategory, date, activeTab });
    } else {
      setCategory({});
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, date])

  return (
    <ListCategories>
      {categoryList.map((item, idx) => {
        const categoryObject = categories.find(
          category => category.value === item.category
        );

        return (
          <CategoriesItem
            key={idx}
            index={idx}
            item={item}
            categoryObject={categoryObject}
            handleItemClick={(index, category) =>
              handleItemClick(index, category)
            }
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
  date: PropTypes.any,
};
