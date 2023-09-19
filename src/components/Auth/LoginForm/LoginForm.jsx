import { useForm } from 'react-hook-form';
import { loginUser } from '../../../services/authApi';

export const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    // console.log(data);

    const response = await loginUser(data);

    console.log(response);

    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ outline: '1px solid green' }}
      >
        <p>You can log in with your Google Account:</p>
        <button type="button">Google</button>
        <p>Or log in using an email and password, after registering:</p>
        <label>
          <input type="text" {...register('email', { required: true })} />
        </label>
        <label>
          <input
            type="password"
            {...register('password', { required: true })}
          />
        </label>
        <button>Log in</button>
        <button type="button">Register</button>
      </form>
    </>
  );
};
