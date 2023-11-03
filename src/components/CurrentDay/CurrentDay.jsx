import { useState, useEffect } from "react";
import { ContainerCurrentDay, TextDay } from "./CurrentDay.styled";
import { Icon } from "../../shared/components/Icon/Icon";

export const CurrentDay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function addLeadingZero(value) {
    return String(value).padStart(2, '0'); 
      }

  const day = addLeadingZero(currentDate.getDate());
  const month = addLeadingZero(currentDate.getMonth() + 1);
  const year = currentDate.getFullYear();

  return (
    <ContainerCurrentDay>
      <Icon iconName="icon-calendar" width={20} height={20} />
      <TextDay>
        {day}.{month}.{year}
      </TextDay>
    </ContainerCurrentDay>
  );
};
