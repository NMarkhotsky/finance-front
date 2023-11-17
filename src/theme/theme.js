const fonts = {
  regular: 'Roboto-Regular',
  medium: 'Roboto-Medium',
  bold: 'Roboto-Bold',
};

const media = {
  phone: '(min-width: 480px)',
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1280px)',
};

const fontSizes = {
  xxxs: '8px',
  xxs: '10px',
  xs: '12px',
  sm: '14px',
  md: '16px',
  ml: '18px',
  lg: '20px',
  xl: '24px',
  xxl: '28px',
  xxxl: '32px',
  big: '36px',
  huge: '48px',
  gigantic: '68px',
  mega: '102px',
};

const boxShadowColor = {
  mobile: '5px 10px 20px 0px rgba(170, 178, 197, 0.40)',
  tablet: '0px 10px 60px 0px rgba(170, 178, 197, 0.20)',
  desktop: '0px 10px 60px 0px rgba(170, 178, 197, 0.20)',
  orangeBtn: '1px 2px 5px 0px rgba(255, 117, 29, 0.40)',
  greyBtn: '1px 2px 5px 0px rgba(170, 178, 197, 0.40)',
};

const transitionHover = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const lightTheme = {
  colors: {
    mainBgdColor: '#FFFFFF',
    secondaryBgdColor: '#F2F5FC',
    greyLightBgdColor: '#C7CCDC',
    mainTextColor: '#52555F',
    secondaryTextColor: '#000000',
    darkTextColor: '#52555F',
    whiteTextColor: '#F5F6FB',
    greyTextColor: 'rgba(82, 85, 95, 0.70)',
    greyLightTextColor: '#C7CCDC',
    red: '#E53935',
    green: '#407946',
    orange: '#FF751D',
    orangeLight: '#FFDAC0',
    borderColor: '#FFFFFF',
    borderSecondaryColor: '#F5F6FB',
    inputBgdColor: '#F6F7FB',
    inputPlaceholderColor: '#A6ABB9',
    btnBgdMainColor: '#F5F6FB',
    tableBgdMainColor: '#F5F6FB',
    btnBgdSecondaryColor: '#FF751D',
    btnGoogleColor: '#F6F7FB',
  },
  media,
  fonts,
  fontSizes,
  boxShadowColor,
  transitionHover,
};

export const darkTheme = {
  colors: {},
  media,
  fonts,
  fontSizes,
  boxShadowColor,
  transitionHover,
};
