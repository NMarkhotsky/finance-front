import { BalanceForm } from "../../components/BalanceForm/BalanceForm";
import { ButtonToReports } from "../../components/ButtonToReports/ButtonToReports";
import { InfoBox } from "../../components/InfoBox/InfoBox";
import { MenuForActiveLink } from "../../components/MenuForActiveLink/MenuForActiveLink";
import { Container } from "./HomePage.styled";

const HomePage = () => {
  return (
    <>
      <Container>
        <BalanceForm />
        <ButtonToReports />
        <InfoBox />
      </Container>
      <MenuForActiveLink />
    </>
  );
};

export default HomePage;
