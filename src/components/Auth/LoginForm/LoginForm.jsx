import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AuthInput } from '../AuthInput/AuthInput';
import { AuthLabel } from '../AuthLabel/AuthLabel';
import { AuthForm } from '../AuthForm/AuthForm';
import { AuthTitle } from '../AuthTitle/AuthTitle';
import { AuthButton } from '../AuthButton/AuthButton';
import { AuthButtonGoogle } from '../AuthButtonGoogle/AuthButtonGoogle';
import { AuthButtonContainer } from '../AuthButton/AuthButton.styled';
import { login } from '../../../redux/auth/operations';
import { AuthRequiredField } from '../AuthRequiredField/AuthRequiredField';
import { authValidation } from '../../../constants';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    console.log(data);

    dispatch(login(data));

    reset();
  };

  return (
    <>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthTitle>You can log in with your Google Account:</AuthTitle>
        <AuthButtonGoogle />
        <AuthTitle>
          Or log in using an email and password, <br /> after registering:
        </AuthTitle>
        <AuthLabel>
          Email:
          <AuthInput
            type="email"
            placeholder="your@email.com"
            props={{
              ...register('email', { required: authValidation }),
            }}
          />
          {errors.email && <AuthRequiredField errors={errors.email.message} />}
        </AuthLabel>
        <AuthLabel>
          Password:
          <AuthInput
            type="password"
            placeholder="your password"
            props={{
              ...register('password', { required: authValidation }),
            }}
          />
          {errors.password && (
            <AuthRequiredField errors={errors.password.message} />
          )}
        </AuthLabel>
        <AuthButtonContainer>
          <AuthButton type="submit">LOG IN</AuthButton>
          <NavLink to="/register">
            <AuthButton type="button">REGISTRATION</AuthButton>
          </NavLink>
        </AuthButtonContainer>
      </AuthForm>
    </>
  );
};
