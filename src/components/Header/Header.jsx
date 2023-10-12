import { useDispatch } from 'react-redux';
import { useState } from 'react';
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
import { ModalApproveAction } from '../../shared/components/ModalApproveAction/ModalApproveAction';
import { ModalGlobal } from '../ModalGlobal/ModalGlobal';


export const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();
  // console.log('user: ', user);
  // console.log('isLoggedIn: ', isLoggedIn);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    setShowModal(false);
  };

  return (
    <>
      <HeaderContainer>
        <Icon iconName="icon-logo" width={90} height={31} />
        {isLoggedIn && user.name && (
          <UserWrapper>
            <UserLogo>{user.name.slice(0, 1).toUpperCase()}</UserLogo>
            <UserName>{user.name}</UserName>
            <LogoutButton type="button" onClick={openModal}>
              Exit
            </LogoutButton>
          </UserWrapper>
        )}
      </HeaderContainer>
      {showModal && (
        <ModalApproveAction onClose={closeModal}>
          <ModalGlobal
            handleModal={closeModal}
            handleDelete={handleLogout}
            title="Are you sure?"
          />
        </ModalApproveAction>
      )}
    </>
  );
};
