import { BarChartComp } from "../../components/BarChart/BarChart";
import { BackButton } from "../../components/BackButton/BackButton";
import { SelectCurrentPeriod } from "../../components/SelectCurrentPeriod/SelectCurrentPeriod";

const ReportPage = () => {
  return (
    <div>
      <BackButton/>
      <SelectCurrentPeriod/>
      <BarChartComp/>
    </div>
  );
};

export default ReportPage;
