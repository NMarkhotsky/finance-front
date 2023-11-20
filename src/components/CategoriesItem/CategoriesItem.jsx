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
import { useEffect } from "react";
import { formatSum } from "../../services/balanceFormServices";

export const CategoriesItem = ({
  item,
  categoryObject,
  index,
  handleItemClick,
  isActive,
  activeTab,
  addItemCategory
}) => {


useEffect(() => {
  if (isActive) {
    addItemCategory({ item, activeTab });
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [isActive])

  const handleClick = () => {
    handleItemClick(index, item)
  };

  const correctSum = formatSum(item.total_sum); 

  return (
            <ItemCategories onClick={handleClick}>
              <Text>{correctSum}</Text>
              <ImageBox>
                <ImgBackground>
                  <IconCategories
                    iconName="icon-circle"
                    width={59}
                    height={46}
                    fill={isActive ? "#ffdac0" : "#F5F6FB"}
                  />
                </ImgBackground>
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
  activeTab: PropTypes.string.isRequired,
  addItemCategory: PropTypes.func.isRequired
};
