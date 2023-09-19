import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { loginUser } from '../../../services/authApi';
import { AuthInput } from '../AuthInput/AuthInput';
import { AuthLabel } from '../AuthLabel/AuthLabel';
import { AuthForm } from '../AuthForm/AuthForm';
import { AuthTitle } from '../AuthTitile/AuthTitle';
import { AuthButton } from '../AuthButton/AuthButton';
import { AuthButtonGoogle } from '../AuthButtonGoogle/AuthButtonGoogle';
import { AuthButtonContainer } from '../AuthButton/AuthButton.styled';

export const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    console.log(data);

    const response = await loginUser(data);

    console.log(response);

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
          <AuthButton type="submit">LOG IN</AuthButton>
          <NavLink to="/register">
            <AuthButton type="button">REGISTRATION</AuthButton>
          </NavLink>
        </AuthButtonContainer>
      </AuthForm>
    </>
  );
};
