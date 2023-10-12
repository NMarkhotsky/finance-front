import { useDispatch } from 'react-redux';
import {
  HeaderContainer,
  LogoutButton,
  UserLogo,
  UserName,
  UserWrapper,
} from './Header.styled';
import { Icon } from '../../shared/components/Icon/Icon';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { logout } from '../../redux/auth/operations';

export const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();
  // console.log('user: ', user);
  // console.log('isLoggedIn: ', isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <HeaderContainer>
        <Icon iconName="icon-logo" width={90} height={31} />
        {isLoggedIn && user.name && (
          <UserWrapper>
            <UserLogo>{user.name.slice(0, 1).toUpperCase()}</UserLogo>
            <UserName>{user.name}</UserName>
            <LogoutButton type="button" onClick={handleLogout}>
              Exit
            </LogoutButton>
          </UserWrapper>
        )}
      </HeaderContainer>
    </>
  );
};
