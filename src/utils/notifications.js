import toast from 'react-hot-toast';
// import 'react-hot-toast/react-hot-toast.css';
import PropTypes from 'prop-types';
// import ImageIcon from "../assets/images/cabbage.png"; 

export const Notifications = (type, message) => {
    console.log(type);
toast(message, {
    // icon: () => (
    //     <div style={{ backgroundImage: `url(${ImageIcon})`, width: '40px', height: '40px' }} />
    //   ),
    icon: "😄",
    style: {
    
    }
})
}


Notifications.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  };