import PropTypes from "prop-types";
import {
  Text,
  ImageBox,
  ImgBackground,
  Img,
  ItemCategories,
  Title,
} from "./CategoriesItem.styled";
import CircleImg from "../../assets/images/circle.png";

export const CategoriesItem = ({ item, categoryObject }) => {
  console.log("item", categoryObject);
  return (
    <ItemCategories>
      <Text>{item.total_sum}</Text>
      <ImageBox>
        <ImgBackground
          src={CircleImg}
          alt="CircleBackground"
          width={59}
          height={46}
        />
        <Img
          src={categoryObject.image}
          alt={categoryObject.value}
          width={56}
          height={56}
        />
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
};
