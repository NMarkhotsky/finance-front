import { useEffect, useState } from 'react';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';

export const CookieModalBanner = () => {
  const [cookiePermission, setCookiePermission] = useState(null);
  const { t } = useTranslation();
  useEffect(() => {
    setCookiePermission(getCookieConsentValue('CookieConsent'));
  }, []);

  return (
    <>
      {!cookiePermission ||
        (cookiePermission === 'false' && (
          <CookieConsent
            debug={true}
            buttonText={t('cookie_accept')}
            declineButtonText={t('cookie_decline')}
            buttonStyle={{
              minWidth: '100px',
              backgroundColor: 'green',
              color: '#FFF',
            }}
            declineButtonStyle={{ minWidth: '100px', backgroundColor: 'grey' }}
            enableDeclineButton={true}
            expires={365}
            overlay={true}
          >
            {t('cookie_message')}
          </CookieConsent>
        ))}
    </>
  );
};
