import { Icon } from '../../shared/components/Icon/Icon';
import { ContainerButtonToReports, TextButton } from './ButtonToReports.styled';
import { useTranslation } from 'react-i18next';

export const ButtonToReports = () => {
  const { t } = useTranslation();

  return (
    <ContainerButtonToReports to="/report">
      <TextButton>{t('button_reports')}</TextButton>
      <Icon iconName="icon-bar_chart" width={24} height={24} />
    </ContainerButtonToReports>
  );
};
