import PropTypes from 'prop-types';

import { Modal, 
  Title, 
  Text, 
  PetName, 
  BtnWrapper,
  CancelButton,
  YesButton,
  ButtonText,
  IconWraper,
  StyledIcon, } from './ModalGlobal.styled';
import { Trans } from 'react-i18next';
import { t } from 'i18next';

export const ModalGlobal = ({
    handleModal,
    handleDelete,
    title = 'Are you sure?',
    name,
  }) => {
    return (
      <Modal>
        <Title>{title}</Title>
        <Text>
          <Trans i18nKey="modal_deletePet_description" values={{ name }}>
            Are you sure you want to delete <PetName>“{name}”</PetName>? You can`t
            undo this action.
          </Trans>
        </Text>
        <BtnWrapper>
          <CancelButton onClick={handleModal}>
            <ButtonText>{t('other_cancel')}</ButtonText>
          </CancelButton>
          <YesButton onClick={handleDelete}>
            <ButtonText>{t('other_yes')}</ButtonText>
            <IconWraper>
              <StyledIcon iconName="icon-trash" stroke={'#FDF7F2'} />
            </IconWraper>
          </YesButton>
          {/* <CancelButton onClick={handleModal}>
            <span>Cancel</span>
          </CancelButton>
          <YesButton onClick={handleDelete}>
            <ButtonText>Yes</ButtonText>
            <IconWraper>
              <StyledIcon iconName="icon-trash" stroke={'#FDF7F2'} />
            </IconWraper>
          </YesButton> */}
        </BtnWrapper>
      </Modal>
    );
  };

  ModalGlobal.propTypes = {
    handleModal: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };