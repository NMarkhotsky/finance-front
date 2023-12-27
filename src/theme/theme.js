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
    titleColor: '#000000',
    red: '#E53935',
    green: '#407946',
    orange: '#FF751D',
    orangeLight: '#FFDAC0',
    borderColor: '#FFFFFF',
    borderSecondaryColor: '#F5F6FB',
    inputBgdColor: '#F6F7FB',
    inputTextColor: '#000000',
    inputPlaceholderColor: '#A6ABB9',
    btnBgdMainColor: '#F5F6FB',
    tableBgdMainColor: '#F5F6FB',
    btnBgdSecondaryColor: '#FF751D',
    btnGoogleColor: '#F6F7FB',
    userLogoBgd: '#f5f6fb',
  },
  media,
  fonts,
  fontSizes,
  boxShadowColor,
  transitionHover,
};

export const darkTheme = {
  colors: {
    mainBgdColor: '#1E1E1E', // Темний фон
    secondaryBgdColor: '#2C2C2C', // Вторинний темний фон
    greyLightBgdColor: '#404040', // Світлий сірий фон
    mainTextColor: '#D9D9D9', // Основний текстовий колір
    secondaryTextColor: '#FFFFFF', // Вторинний текстовий колір
    darkTextColor: '#D9D9D9', // Темний текстовий колір
    whiteTextColor: '#1E1E1E', // Білий текст
    greyTextColor: 'rgba(217, 217, 217, 0.70)', // Сірий текст
    greyLightTextColor: '#D9D9D9', // Світлий сірий текст
    titleColor: '#000000', // Основний заголовок
    red: '#FF5555', // Червоний колір
    green: '#4CAF50', // Зелений колір
    orange: '#FFA07A', // Оранжевий колір
    orangeLight: '#FFDAB9', // Світлий оранжевий колір
    borderColor: '#404040', // Колір межі
    borderSecondaryColor: '#2C2C2C', // Вторинний колір межі
    inputBgdColor: '#333333', // Фон введення
    inputTextColor: '#D9D9D9', // Текст введення
    inputPlaceholderColor: '#A6ABB9', // Колір заповнювача введення
    btnBgdMainColor: '#1E1E1E', // Основний фон кнопки
    tableBgdMainColor: '#1E1E1E', // Основний фон таблиці
    btnBgdSecondaryColor: '#FFA07A', // Вторинний фон кнопки
    btnGoogleColor: '#333333', // Колір кнопки Google
    userLogoBgd: '#3e3f42',
  },
  media,
  fonts,
  fontSizes,
  boxShadowColor,
  transitionHover,
};
