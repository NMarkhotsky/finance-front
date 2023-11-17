import PropTypes from "prop-types";
import { ListCategories } from "./CategoriesList.styled";
import { CategoriesItem } from "../CategoriesItem/CategoriesItem";

export const CategoriesList = ({ categoriesList, categories }) => {
  return (
    <ListCategories>
      {categoriesList.map((item, idx) => {
        const categoryObject = categories.find(
          (category) => category.value === item.category
        );

        return (
          <CategoriesItem
            key={idx}
            item={item}
            categoryObject={categoryObject}
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
