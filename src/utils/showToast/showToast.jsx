import toast from "react-hot-toast";
// import 'react-hot-toast/react-hot-toast.css';
import PropTypes from "prop-types";
import { Icon } from "../../shared/components/Icon/Icon";
import { ContainerToast } from "./showToast.styled";
// import ImageIcon from "../assets/images/cabbage.png";

export const ShowToast = (type, message) => {
  switch (type) {
    case "success":
      toast.custom(
        <ContainerToast>
          <Icon iconName="icon-cabbage" width={24} height={24} stroke="green" />
          <p>{message}</p>
        </ContainerToast>
      );
      break;
    case "error":
      toast.custom(
        <ContainerToast>
          <Icon iconName="icon-cabbage" width={24} height={24} stroke="red" />
          <p>{message}</p>
        </ContainerToast>
      );
      break;
    case "custom":
      toast.custom(
        <ContainerToast>
          <Icon iconName="icon-cabbage" width={24} height={24} stroke="gray" />
          <p>{message}</p>
        </ContainerToast>
      );
      break; 
  }
};

ShowToast.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
