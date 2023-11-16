import PropTypes from 'prop-types';
import { Field } from './AuthRequiredField.styled';

export const AuthRequiredField = ({ errors }) => {
  return <Field>{errors}</Field>;
};

AuthRequiredField.propTypes = {
  errors: PropTypes.string,
}
