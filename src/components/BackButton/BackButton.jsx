import { Button } from "./BackButton.styled";
import { Icon } from "../../shared/components/Icon/Icon";

export const BackButton = () => {
  return (
    <>
      <Button to="/">
        <Icon iconName="icon-arrow-back" width="24" height="24" />
        Main page
      </Button>
    </>
  );
};
