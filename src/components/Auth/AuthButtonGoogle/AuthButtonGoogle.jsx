import { Button } from './AuthButtonGoogle.styled';
import { Icon } from '../../../shared/components/Icon/Icon';

export const AuthButtonGoogle = () => {
  return (
    <Button type="button" href='https://finance-backend-eight.vercel.app/api/auth/google'>
      <Icon iconName="icon-google" width={18} height={18} />
      Google
    </Button>
  );
};
