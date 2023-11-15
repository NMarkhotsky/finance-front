import { DeleteBtn } from "./DeleteButton.styled";
import { Icon } from "../../shared/components/Icon/Icon";
import PropTypes from 'prop-types';


export const DeleteButton = ({ onDeleteClick }) => {

    return (
        <DeleteBtn onClick={onDeleteClick}>
            <Icon iconName="icon-delete" width={18} height={18}  />
        </DeleteBtn>
    );
};

DeleteButton.propTypes = {
    onDeleteClick: PropTypes.func.isRequired
}