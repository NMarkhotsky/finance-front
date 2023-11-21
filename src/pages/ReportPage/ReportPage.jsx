import { useState } from "react";

import { BackButton } from "../../components/BackButton/BackButton";
import { SelectCurrentPeriod } from "../../components/SelectCurrentPeriod/SelectCurrentPeriod";
import { MenuForActiveLinkOnReport } from "../../components/MenuForActiveLinkOnReport/MenuForActiveLinkOnReport";
import { TotalCountForm } from "../../components/TotalCountForm/TotalCountForm";
import { BalanceForm } from "../../components/BalanceForm/BalanceForm";
import { PageTopBar, TotalCountFormWrapper, BackButtonItem, BalanceFormItem, SelectCurrentPeriodItem } from "./ReportPage.styled";

const ReportPage = () => {

  const [date, setDate] = useState(""); 

  const handleDate = (date) => {
    setDate(date); 
  }

  return (
    <>
      <PageTopBar>
        <BackButtonItem>
          <BackButton />
        </BackButtonItem>
        <BalanceFormItem>
          <BalanceForm />
        </BalanceFormItem>
        <SelectCurrentPeriodItem>
          <SelectCurrentPeriod handleDate={handleDate} />
        </SelectCurrentPeriodItem>
      </PageTopBar>
      <TotalCountFormWrapper>
        <TotalCountForm date={date}/>
      </TotalCountFormWrapper>
      <MenuForActiveLinkOnReport date={date}/>
    </>
  );
};

export default ReportPage;
