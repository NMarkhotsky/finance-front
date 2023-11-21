import { useAuth } from "../../hooks/useAuth/useAuth";

import { BalanceForm } from "../../components/BalanceForm/BalanceForm";
import { ButtonToReports } from "../../components/ButtonToReports/ButtonToReports";
import { InfoBox } from "../../components/InfoBox/InfoBox";
import { MenuForActiveLink } from "../../components/MenuForActiveLink/MenuForActiveLink";
import { Container } from "./HomePage.styled";

const HomePage = () => {

  const { user } = useAuth();

  return (
    <>
      <Container>
        <BalanceForm />
        <ButtonToReports />
        {user.balance && <InfoBox />}
      </Container>
      <MenuForActiveLink />
    </>
  );
};

export default HomePage;
