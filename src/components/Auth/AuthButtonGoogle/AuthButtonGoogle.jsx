import { Button } from './AuthButtonGoogle.styled';
import { Icon } from '../../../shared/components/Icon/Icon';
import { useTranslation } from 'react-i18next';

export const AuthButtonGoogle = () => {
  const { t } = useTranslation();

  return (
    <Button
      type="button"
      href="https://finance-backend-eight.vercel.app/api/auth/google"
    >
      <Icon iconName="icon-google" width={18} height={18} />
      {t('button_google')}
    </Button>
  );
};
