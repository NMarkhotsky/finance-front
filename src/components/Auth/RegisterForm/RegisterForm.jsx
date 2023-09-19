import { useForm } from 'react-hook-form';
import { registerUser } from '../../../services/authApi';

export const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    console.log(data);

    const response = await registerUser(data);

    console.log(response);

    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ outline: '1px solid red' }}
      >
        <p>You can log in with your Google Account:</p>
        <button type="button">Google</button>
        <p>Or log in using an email and password, after registering:</p>
        <label>
          <input type="text" {...register('name', { required: true })} />
        </label>
        <label>
          <input type="text" {...register('email', { required: true })} />
        </label>
        <label>
          <input
            type="password"
            {...register('password', { required: true })}
          />
        </label>
        <button>Register</button>
        <button type="button">Log in</button>
      </form>
    </>
  );
};
