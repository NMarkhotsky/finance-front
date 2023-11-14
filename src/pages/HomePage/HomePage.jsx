// import { AddTransaction } from "../../components/AddTransaction/AddTransaction";
import { BalanceForm } from "../../components/BalanceForm/BalanceForm";
import { ButtonToReports } from "../../components/ButtonToReports/ButtonToReports";
// import { CurrentDay } from "../../components/CurrentDay/CurrentDay";
import { InfoBox } from "../../components/InfoBox/InfoBox";
import { MenuForActiveLink } from "../../components/MenuForActiveLink/MenuForActiveLink";
import { Container } from "./HomePage.styled";
// import { TransactionTable } from "../../components/TransactionTable/TransactionTable";

const HomePage = () => {
  // return <div>
  //   <BalanceForm />
  //   <ButtonToReports/>
  //   <MenuForActiveLink/>
  //   <InfoBox />
  //   <CurrentDay/>
  //   <AddTransaction />
  //   <TransactionTable/>
  // </div>;
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
