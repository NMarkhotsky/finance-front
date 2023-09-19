import PropTypes from 'prop-types';
import icons from '../../../assets/icons/sprite.svg';

export const Icon = ({ iconName, width, height, stroke, fill }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${icons}#${iconName}`} stroke={stroke} fill={fill} />
    </svg>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
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
