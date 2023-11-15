import toast from 'react-hot-toast';
import PropTypes from 'prop-types';


export const Notifications = (type, message) => {
console.log(type);
console.log(message);
toast(message, {
    icon: "" , 
    style: {

    }
})
}


Notifications.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  };