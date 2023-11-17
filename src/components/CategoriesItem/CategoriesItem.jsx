import PropTypes from "prop-types";
import {
  Text,
  ImageBox,
  ImgBackground,
  Img,
  ItemCategories,
  Title,
} from "./CategoriesItem.styled";
import { IconCategories } from "../../shared/components/IconCategories";

export const CategoriesItem = ({
  item,
  categoryObject,
  index,
  handleItemClick,
  isActive,
}) => {
  return (
    <ItemCategories onClick={() => handleItemClick(index)}>
      <Text>{item.total_sum}</Text>
      <ImageBox>
        <ImgBackground>
          <IconCategories
            iconName="icon-circle"
            width={59}
            height={46}
            fill={isActive ? "#ffdac0" : "#F5F6FB"}
          />
        </ImgBackground>
        {/* <Img
          src={categoryObject.image}
          alt={categoryObject.value}
          width={56}
          height={56}
        /> */}
        <Img>
          <IconCategories
            iconName={categoryObject.image}
            width="56"
            height="56"
            fill={isActive ? "#FF751D" : "#071F41"}
          />
        </Img>
      </ImageBox>
      <Title>{item.category}</Title>
    </ItemCategories>
  );
};

CategoriesItem.propTypes = {
  item: PropTypes.shape({
    total_sum: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  categoryObject: PropTypes.shape({
    image: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleItemClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};
