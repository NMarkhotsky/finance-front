import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  CATEGORIES_EXPENSES,
  CATEGORIES_INCOME,
} from '../../constants/globalConstants';
import {
  Text,
  ImageBox,
  ImgBackground,
  Img,
  ItemCategories,
  Title,
} from './CategoriesItem.styled';
import { Icon } from '../../shared/components/Icon/Icon';
import { useEffect } from 'react';
import { formatSum } from '../../services/balanceFormServices';
import { useMyContext } from '../../utils';

export const CategoriesItem = ({
  item,
  categoryObject,
  activeTab,
  handleItemClick,
  // index,
  date,
  isActive,
}) => {
  const { setCategory } = useMyContext();
  const { t } = useTranslation();

  const itemCategory = [...CATEGORIES_EXPENSES, ...CATEGORIES_INCOME].find(
    category => category.value === item.category
  );

  // const isActive = index === activeIndex;

  useEffect(() => {
    if (isActive) {
      setCategory({ item, activeTab, date });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, item, activeTab, date]);

  const handleClick = () => {
    setCategory({ item, activeTab, date });
    handleItemClick(item.category);
  };

  const correctSum = formatSum(item.total_sum);

  return (
    <ItemCategories onClick={handleClick} $active={isActive}>
      <Text>{correctSum}</Text>
      <ImageBox>
        <ImgBackground>
          <Icon
            iconName="icon-circle"
            width={59}
            height={46}
            fill={isActive ? '#ffdac0' : '#F5F6FB'}
          />
        </ImgBackground>
        <Img>
          <Icon
            iconName={categoryObject.image}
            width="56"
            height="56"
            fill={isActive ? '#FF751D' : '#071F41'}
          />
        </Img>
      </ImageBox>
      <Title>{t(itemCategory.label)}</Title>
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
  activeTab: PropTypes.string.isRequired,
  date: PropTypes.any,
  handleItemClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
