import PropTypes from 'prop-types';
import { ListCategories } from "./CategoriesList.styled";
import { CategoriesItem } from '../CategoriesItem/CategoriesItem';

export const CategoriesList = (categoriesList) => {

  return  <ListCategories>
     {categoriesList.map(({item, idx}) => (
        <CategoriesItem key={idx} item={item}/>
        ))}
  </ListCategories>;
};

CategoriesList.propTypes = {
    categoriesList: PropTypes.array.isRequired,
}