import { useAuth } from "../../hooks/useAuth/useAuth";
import { InfoBoxWrapper, TextInfoBox } from "./InfoBox.styled";

export const InfoBox = () => {

    const { user } = useAuth();

    return (
        <>
            {!user.balance &&
                <InfoBoxWrapper>
                    <TextInfoBox>Hello! To get started, enter the current balance of your account!</TextInfoBox>
                    <TextInfoBox>{`You can't spend money until you have it :)`}</TextInfoBox>
                </InfoBoxWrapper>}
        </>
    )
}