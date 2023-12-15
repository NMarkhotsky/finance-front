import PropTypes from 'prop-types';
import { t } from 'react';
import {
  Modal,
  Title,
  BtnWrapper,
  Button,
  ButtonText,
  IconWrapper,
  StyledIcon,
} from './ModalGlobal.styled';
// import { Trans } from 'react-i18next';
// import { ModalApproveAction } from '../../shared/components/ModalApproveAction/ModalApproveAction';

export const ModalGlobal = ({
  handleModal,
  handleDelete,
  title = t('other_question'),
  // name,
}) => {
  return (
    <Modal>
      {/* <Title>{t(title)}</Title> */}
      <Title>{title}</Title>
      <BtnWrapper>
        <Button onClick={handleDelete}>
          <ButtonText>{t('other_yes')}</ButtonText>
        </Button>
        <Button onClick={handleModal}>
          <ButtonText>{t('other_cancel')}</ButtonText>
        </Button>
      </BtnWrapper>
      <IconWrapper onClick={handleModal}>
        <StyledIcon iconName="icon-close" width="12" height="12" />
      </IconWrapper>
    </Modal>
  );
};

ModalGlobal.propTypes = {
  handleModal: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
};
