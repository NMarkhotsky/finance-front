import { BackButton } from "../../components/BackButton/BackButton";
import { SelectCurrentPeriod } from "../../components/SelectCurrentPeriod/SelectCurrentPeriod";
import { MenuForActiveLinkOnReport } from "../../components/MenuForActiveLinkOnReport/MenuForActiveLinkOnReport";
import { TotalCountForm } from "../../components/TotalCountForm/TotalCountForm";


const ReportPage = () => {

  return (
    <>
      <div style={{display: "flex", justifyContent: "space-between", marginTop: 40}}>
        <BackButton />
        <SelectCurrentPeriod />
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <TotalCountForm />
      </div>
      <MenuForActiveLinkOnReport />
    </>
  );
};

export default ReportPage;
