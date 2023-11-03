import { BarChartComp } from "../../components/BarChart/BarChart";
import { BackButton } from "../../components/BackButton/BackButton";
import { SelectCurrentPeriod } from "../../components/SelectCurrentPeriod/SelectCurrentPeriod";
import { MenuForActiveLinkOnReport } from "../../components/MenuForActiveLinkOnReport/MenuForActiveLinkOnReport";

const ReportPage = () => {
  return (
    <div>
      <BackButton/>
      <SelectCurrentPeriod/>
      <MenuForActiveLinkOnReport/>
      <BarChartComp/>
    </div>
  );
};

export default ReportPage;
