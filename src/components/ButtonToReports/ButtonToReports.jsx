import { Icon } from "../../shared/components/Icon/Icon";
import { ContainerButtonToReports, TextButton } from "./ButtonToReports.styled";

export const ButtonToReports = () => {
  return (
    <ContainerButtonToReports to="/report">
          <TextButton>Reports</TextButton>
          <Icon iconName="icon-bar_chart" width={24} height={24} />
    </ContainerButtonToReports>
  );
};
