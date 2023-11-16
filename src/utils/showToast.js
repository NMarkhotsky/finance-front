import toast from "react-hot-toast";
// import 'react-hot-toast/react-hot-toast.css';
import PropTypes from "prop-types";
// import ImageIcon from "../assets/images/cabbage.png";

export const ShowToast = (type, message) => {

  switch (type) {
    case "success":
      toast.success(message, {
        id: Date.now(),
        position: "top-right",
        icon: "=)"
      });
      break;
    case "error":
      toast.error(message, {
        id: Date.now(),
        position: "top-right",
        icon: "("
      });
      break; 
  }


  // console.log(type);
  // toast(message, {
  //   // icon: () => (
  //   //     <div style={{ backgroundImage: `url(${ImageIcon})`, width: '40px', height: '40px' }} />
  //   //   ),
  //   icon: "😄",
  //   style: {},
  // });
};

ShowToast.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
