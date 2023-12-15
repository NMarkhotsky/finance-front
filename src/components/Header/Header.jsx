import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { useTranslation } from 'react-i18next';
import {
  HeaderContainer,
  LogoutButton,
  UserLogo,
  UserName,
  UserWrapper,
  LogoutButtonText,
  LogoutIconWrapper,
} from './Header.styled';
import { Icon } from '../../shared/components/Icon/Icon';
import { logout } from '../../redux/auth/operations';
import { ModalApproveAction } from '../../shared/components/ModalApproveAction/ModalApproveAction';
import { ModalGlobal } from '../ModalGlobal/ModalGlobal';
import { ToggleLanguageBar } from '../ToggleLanguageBar/ToggleLanguageBar';

export const Header = () => {
  const { t } = useTranslation();

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
        <Link to={'/'}>
          <Icon iconName="icon-logo" width={90} height={31} />
        </Link>
        <ToggleLanguageBar />
        {isLoggedIn && user.name && (
          <UserWrapper>
            <UserLogo>{user.name.slice(0, 1).toUpperCase()}</UserLogo>
            <UserName>{user.name}</UserName>
            <LogoutButton type="button" onClick={openModal}>
              <LogoutButtonText>{t('button_exit')}</LogoutButtonText>
              <LogoutIconWrapper>
                <Icon iconName="logout" width={16} height={16} />
              </LogoutIconWrapper>
            </LogoutButton>
          </UserWrapper>
        )}
      </HeaderContainer>
      {showModal && (
        <ModalApproveAction onClose={closeModal}>
          <ModalGlobal
            handleModal={closeModal}
            handleDelete={handleLogout}
            title={t('modal_leave_question')}
          />
        </ModalApproveAction>
      )}
    </>
  );
};
