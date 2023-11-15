import { DeleteBtn } from "./DeleteButton.styled";
import { Icon } from "../../shared/components/Icon/Icon";

    // eslint-disable-next-line react/prop-types
    export const DeleteButton = ({ onDeleteClick }) => {

        return (
            <DeleteBtn onClick={onDeleteClick}>
                <Icon iconName="icon-delete" width={18} height={18}  />
            </DeleteBtn>
        );
    };