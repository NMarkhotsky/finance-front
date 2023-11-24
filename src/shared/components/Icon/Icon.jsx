import PropTypes from 'prop-types';
import icons from '../../../assets/icons/sprite.svg';
import iconsCategory from "../../../assets/icons/icons-categories.svg"; 

export const Icon = ({ iconName, width, height, stroke, fill }) => {
  return (
    <svg width={width} height={height}>

    {icons && (
      <use href={`${icons}#${iconName}`} stroke={stroke} fill={fill} />
    )}
    {iconsCategory && (
      <use href={`${iconsCategory}#${iconName}`} stroke={stroke} fill={fill} />
    )}
     </svg>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  width: PropTypes.any,
  // width: PropTypes.string,
  height: PropTypes.any,
  // height: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
};

/*
 Приклад використання компонента іконки
      <Icon
        iconName={'icon-arrow-left'} // назву іконки дивитись в src/assets/icons/sprite.svg і порівнювати з назвою на макеті
        width={...}   
        height={...} 
        stroke={'...'} // колір обводки
        fill={'...'} // колір заливки
      />
*/
