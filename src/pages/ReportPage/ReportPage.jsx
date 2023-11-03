import { BarChartComp } from "../../components/BarChart/BarChart";
import { BackButton } from "../../components/BackButton/BackButton";
import { SelectCurrentPeriod } from "../../components/SelectCurrentPeriod/SelectCurrentPeriod";
import { MenuForActiveLinkOnReport } from "../../components/MenuForActiveLinkOnReport/MenuForActiveLinkOnReport";

const ReportPage = () => {
  return (
    <>
      <div style={{display: "flex", justifyContent: "space-between", marginTop: 40}}>
        <BackButton />
        <SelectCurrentPeriod />
      </div>
      <MenuForActiveLinkOnReport />
      <BarChartComp />
    </>
  );
};

export default ReportPage;
