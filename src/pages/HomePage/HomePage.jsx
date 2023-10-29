import { AddTransaction } from "../../components/AddTransaction/AddTransaction";
import { BalanceForm } from "../../components/BalanceForm/BalanceForm";
import { ButtonToReports } from "../../components/ButtonToReports/ButtonToReports";
import { CurrentDay } from "../../components/CurrentDay/CurrentDay";
import { InfoBox } from "../../components/InfoBox/InfoBox";
import { TransactionTable } from "../../components/TransactionTable/TransactionTable";

const HomePage = () => {
  return <div>
    <BalanceForm />
    <ButtonToReports/>
    <InfoBox />
    <CurrentDay/>
    <AddTransaction />
    <TransactionTable/>
  </div>;
};

export default HomePage;
