/* eslint-disable react/prop-types */
import { Field } from './AuthRequiredField.styled';

export const AuthRequiredField = ({ errors }) => {
  return <Field>{errors}</Field>;
};
