import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { Icon } from '../shared/components/Icon/Icon';

export const Notifications = (type, message) => {
console.log(type);
console.log(message);
toast(message, {
    icon: <Icon iconName="icon-cabbage" /> , 
    style: {

    }
})
}


Notifications.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  };