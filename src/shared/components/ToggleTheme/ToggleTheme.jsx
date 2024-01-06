import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import PropTypes from 'prop-types';
import { setTheme } from '../../../redux/theme/themeSlice';
import { SwitcherWrapper } from './ToggleTheme.styled';

export const ToggleTheme = ({ size }) => {
  const currentTheme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const switchTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);

  return (
    <SwitcherWrapper>
      <DarkModeSwitch
        checked={currentTheme === 'dark'}
        onChange={switchTheme}
        size={size ? size : 25}
        moonColor="#F5F6FB"
        sunColor="#FF751D"
      />
    </SwitcherWrapper>
  );
};

ToggleTheme.propTypes = {
  size: PropTypes.number,
};
