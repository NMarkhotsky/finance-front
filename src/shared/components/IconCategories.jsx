import PropTypes from 'prop-types';
import icons from '../../assets/icons/icons-categories.svg';

export const IconCategories = ({ iconName, width, height, stroke, fill }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${icons}#${iconName}`} stroke={stroke} fill={fill} />
    </svg>
  );
};

IconCategories.propTypes = {
  iconName: PropTypes.string.isRequired,
  width: PropTypes.any,
  // width: PropTypes.string,
  height: PropTypes.any,
  // height: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
};