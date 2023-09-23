import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AuthForm } from '../AuthForm/AuthForm';
import { AuthTitle } from '../AuthTitile/AuthTitle';
import { AuthButtonGoogle } from '../AuthButtonGoogle/AuthButtonGoogle';
import { AuthLabel } from '../AuthLabel/AuthLabel';
import { AuthInput } from '../AuthInput/AuthInput';
import { AuthButton } from '../AuthButton/AuthButton';
import { AuthButtonContainer } from '../AuthButton/AuthButton.styled';
import { registration } from '../../../redux/auth/operations';

export const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    console.log(data);

    dispatch(registration(data));

    reset();
  };

  return (
    <>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthTitle>You can log in with your Google Account:</AuthTitle>
        <AuthButtonGoogle type="button">Google</AuthButtonGoogle>
        <AuthTitle>
          Or log in using an email and password, after registering:
        </AuthTitle>
        <AuthLabel>
          Name:
          <AuthInput
            type="text"
            placeholder="Your name"
            props={{ ...register('name', { required: true }) }}
          />
        </AuthLabel>
        <AuthLabel>
          Email:
          <AuthInput
            type="email"
            placeholder="your@email.com"
            props={{ ...register('email', { required: true }) }}
          />
        </AuthLabel>
        <AuthLabel>
          Password:
          <AuthInput
            type="password"
            placeholder="your password"
            props={{ ...register('password', { required: true }) }}
          />
        </AuthLabel>
        <AuthButtonContainer>
          <AuthButton type="submit">REGISTRATION</AuthButton>
          <NavLink to="/login">
            <AuthButton type="button">LOG IN</AuthButton>
          </NavLink>
        </AuthButtonContainer>
      </AuthForm>
    </>
  );
};
