import { Button } from './AuthButtonGoogle.styled';
import { Icon } from '../../../shared/components/Icon/Icon';

export const AuthButtonGoogle = () => {
  return (
    <Button type="button">
      <Icon iconName="icon-google" width={18} height={18} />
      Google
    </Button>
  );
};
