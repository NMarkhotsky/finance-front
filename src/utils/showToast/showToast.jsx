import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { Icon } from "../../shared/components/Icon/Icon";
import { ContainerToast,ContainerToastError,ContainerToastSuccess, Message   } from "./showToast.styled";

export const ShowToast = (type, message) => {
  switch (type) {
    case "success":
      toast.custom(
        <ContainerToastSuccess>
          <Icon iconName="icon-cabbage" width={30} height={30} stroke="green" />
          <Message>{message}</Message>
        </ContainerToastSuccess>
      );
      break;
    case "error":
      toast.custom(
        <ContainerToastError>
          <Icon iconName="icon-cabbage" width={30} height={30} stroke="red" />
          <Message>{message}</Message>
        </ContainerToastError>
      );
      break;
    case "info":
      toast.custom(
        <ContainerToast>
          <Icon iconName="icon-cabbage" width={30} height={30} stroke="gray" />
          <Message>{message}</Message>
        </ContainerToast>
      );
      break; 
      // default: 
      // break; 
  }
};

ShowToast.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
