import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'UA' },
  uk: { nativeName: 'ENG' },
};

export const ToggleLanguageBar = () => {
  const { i18n } = useTranslation();

  return (
    <>
      {Object.keys(lngs).map(lng => (
        <button
          type="sumbit"
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          disabled={i18n.resolvedLanguage === lng}
          style={{
            display: i18n.resolvedLanguage === lng ? 'none ' : 'flex',
          }}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </>
  );
};
