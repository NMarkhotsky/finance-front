import { useState } from "react";

import { BackButton } from "../../components/BackButton/BackButton";
import { SelectCurrentPeriod } from "../../components/SelectCurrentPeriod/SelectCurrentPeriod";
import { MenuForActiveLinkOnReport } from "../../components/MenuForActiveLinkOnReport/MenuForActiveLinkOnReport";
import { TotalCountForm } from "../../components/TotalCountForm/TotalCountForm";


const ReportPage = () => {

  const [date, setDate] = useState(""); 

  const handleDate = (date) => {
    setDate(date); 
  }

  return (
    <>
      <div style={{display: "flex", justifyContent: "space-between", marginTop: 40}}>
        <BackButton />
        <SelectCurrentPeriod  handleDate={handleDate}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <TotalCountForm date={date}/>
      </div>
      <MenuForActiveLinkOnReport date={date}/>
    </>
  );
};

export default ReportPage;
