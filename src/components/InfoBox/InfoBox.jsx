import { useTranslation } from 'react-i18next';

import { useAuth } from '../../hooks/useAuth/useAuth';

import { InfoBoxWrapper, TextInfoBox } from './InfoBox.styled';

export const InfoBox = () => {
  const { t } = useTranslation();

  const { user } = useAuth();

  return (
    <>
      {user && !user.balance && (
        <InfoBoxWrapper>
          <TextInfoBox>{t('infoBox_text')}</TextInfoBox>
          <TextInfoBox>{t('infoBox_details')}</TextInfoBox>
        </InfoBoxWrapper>
      )}
    </>
  );
};
