import { useEffect, useState } from 'react';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';

export const CookieModalBanner = () => {
  const [cookiePermission, setCookiePermission] = useState(null);

  useEffect(() => {
    setCookiePermission(getCookieConsentValue('CookieConsent'));
  }, []);

  return (
    <>
      {!cookiePermission ||
        (cookiePermission === 'false' && (
          <CookieConsent
            debug={true}
            buttonText={'Accept'}
            declineButtonText={'Decline'}
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
            This website uses cookies to enhance the user experience.
          </CookieConsent>
        ))}
    </>
  );
};
