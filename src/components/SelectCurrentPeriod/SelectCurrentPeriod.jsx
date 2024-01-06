import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import enUsLocale from 'date-fns/locale/en-US';
import { uk } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../shared/components/Icon/Icon';
import {
  ContainerSelectCurrentPeriod,
  Text,
  ButtonIcon,
  TextFormattedDate,
  ContainerFormattedDate,
} from './SelectCurrentPeriod.styled';

export const SelectCurrentPeriod = ({ handleDate }) => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const [currentDate] = useState(new Date());
  const [currentMonth] = useState(currentDate.getMonth());
  const [currentYear] = useState(currentDate.getFullYear());

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const handleDecrement = () => {
    if (selectedMonth === 0) {
      setSelectedYear(prevYear => prevYear - 1);
      setSelectedMonth(11);
    } else {
      setSelectedMonth(prevMonth => prevMonth - 1);
    }
  };

  const handleIncrement = () => {
    if (selectedMonth === 11) {
      setSelectedYear(prevYear => prevYear + 1);
      setSelectedMonth(0);
    } else {
      setSelectedMonth(prevMonth => prevMonth + 1);
    }
  };

  const locale = language === 'uk' ? { locale: uk } : { locale: enUsLocale };

  const formattedDate = format(
    new Date(selectedYear, selectedMonth, 1),
    'LLLL yyyy',
    locale
  );

  const handleDateCallback = useCallback(() => {
    handleDate({ month: selectedMonth + 1, year: selectedYear });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMonth, selectedYear]);

  useEffect(() => {
    handleDateCallback();
  }, [handleDateCallback]);

  return (
    <ContainerSelectCurrentPeriod>
      <Text>{t('text_current_period')}:</Text>
      <ContainerFormattedDate>
        <ButtonIcon onClick={handleDecrement}>
          <Icon iconName="icon-arrow-left" width={7} height={12} />
        </ButtonIcon>
        <TextFormattedDate>{formattedDate}</TextFormattedDate>
        <ButtonIcon onClick={handleIncrement}>
          <Icon iconName="icon-arrow-right" width={7} height={12} />
        </ButtonIcon>
      </ContainerFormattedDate>
    </ContainerSelectCurrentPeriod>
  );
};

SelectCurrentPeriod.propTypes = {
  handleDate: PropTypes.func.isRequired,
};
