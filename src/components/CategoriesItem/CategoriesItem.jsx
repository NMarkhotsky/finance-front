import PropTypes from "prop-types";
import { ItemCategories } from "./CategoriesItem.styled";

export const CategoriesItem = ({item}) => {
  console.log("item", item);
  return <ItemCategories>
    <p>{item.total_sum}</p>
    <img src="#" alt="Category" />
    <h3>{item.category}</h3>
  </ItemCategories>;
};

CategoriesItem.propTypes = {
    item: PropTypes.shape({
        total_sum: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      }).isRequired,
};
