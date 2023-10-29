import { AddTransaction } from "../../components/AddTransaction/AddTransaction";
import { BalanceForm } from "../../components/BalanceForm/BalanceForm";
import { CurrentDay } from "../../components/CurrentDay/CurrentDay";
import { InfoBox } from "../../components/InfoBox/InfoBox";
import { TransactionTable } from "../../components/TransactionTable/TransactionTable";

const HomePage = () => {
  return <div>
    <BalanceForm />
    <InfoBox />
    <CurrentDay/>
    <AddTransaction />
    <TransactionTable/>
  </div>;
};

export default HomePage;
