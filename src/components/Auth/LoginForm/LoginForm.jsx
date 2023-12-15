import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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

  const onSubmit = async data => {
    dispatch(login(data));

    reset();
  };

  return (
    <>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthTitle>{t('text_login_google')}:</AuthTitle>
        <AuthButtonGoogle />
        <AuthTitle>
          {t('text_login_part1')} <br /> {t('text_login_part2')}:
        </AuthTitle>
        <AuthLabel>
          {t('email')}:
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
          {t('password')}:
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
          <AuthButton type="submit">{t('button_login')}</AuthButton>
          <NavLink to="/register">
            <AuthButton type="button">{t('button_register')}</AuthButton>
          </NavLink>
        </AuthButtonContainer>
      </AuthForm>
    </>
  );
};
