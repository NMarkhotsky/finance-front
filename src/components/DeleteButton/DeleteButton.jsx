import { useState } from "react";
import PropTypes from "prop-types";

import { Icon } from "../../shared/components/Icon/Icon";
import { ModalApproveAction } from "../../shared/components/ModalApproveAction/ModalApproveAction";
import { ModalGlobal } from "../ModalGlobal/ModalGlobal";

import { DeleteBtn } from "./DeleteButton.styled";

export const DeleteButton = ({ onDeleteClick }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    onDeleteClick();
    setShowModal(false);
  };

  return (
    <>
      <DeleteBtn onClick={openModal}>
        <Icon iconName="icon-delete" width={18} height={18} />
      </DeleteBtn>
      {showModal && (
        <ModalApproveAction onClose={closeModal}>
          <ModalGlobal
            handleModal={closeModal}
            handleDelete={handleDelete}
            title="Are you sure?"
          />
        </ModalApproveAction>
      )}
    </>
  );
};

DeleteButton.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
};
