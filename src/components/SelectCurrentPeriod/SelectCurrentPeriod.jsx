import { useEffect, useState } from "react";
import { format } from "date-fns";
import enUsLocale from "date-fns/locale/en-US";
import { Icon } from "../../shared/components/Icon/Icon";
import {
  ContainerSelectCurrentPeriod,
  Text,
  ButtonIcon,
  TextFormattedDate,
  ContainerFormattedDate,
} from "./SelectCurrentPeriod.styled";

export const SelectCurrentPeriod = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
      setCurrentMonth(currentDate.getMonth());
      setCurrentYear(currentDate.getFullYear());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentDate]);

  const handleDecrement = () => {
    if (selectedMonth === 0) {
      setSelectedYear((prevYear) => prevYear - 1);
      setSelectedMonth(11);
    } else {
      setSelectedMonth((prevMonth) => prevMonth - 1);
    }
  };

  const handleIncrement = () => {
    if (selectedMonth === 11) {
      setSelectedYear((prevYear) => prevYear + 1);
      setSelectedMonth(0); 
    } else {
      setSelectedMonth((prevMonth) => prevMonth + 1);
    }
  };

  const formattedDate = format(
    new Date(selectedYear, selectedMonth, 1),
    "MMMM yyyy",
    { locale: enUsLocale }
  );

  return (
    <ContainerSelectCurrentPeriod>
      <Text>Current period:</Text>
      <ContainerFormattedDate>
        <ButtonIcon onClick={handleDecrement}>
          <Icon iconName="icon-arrow-left" width={4} height={10} />
        </ButtonIcon>
        <TextFormattedDate>{formattedDate}</TextFormattedDate>
        <ButtonIcon onClick={handleIncrement}>
          <Icon iconName="icon-arrow-right" width={4} height={10} />
        </ButtonIcon>
      </ContainerFormattedDate>
    </ContainerSelectCurrentPeriod>
  );
};
