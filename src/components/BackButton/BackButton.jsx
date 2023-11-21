import { Button, ButtonText } from "./BackButton.styled";
import { Icon } from "../../shared/components/Icon/Icon";

export const BackButton = () => {
  return (
    <>
      <Button to="/">
        <Icon iconName="icon-arrow-back" width="24" height="24" />
        <ButtonText>Main page</ButtonText>
      </Button>
    </>
  );
};
