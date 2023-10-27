import { AddTransaction } from "../../components/AddTransaction/AddTransaction";
import { BalanceForm } from "../../components/BalanceForm/BalanceForm";
import { InfoBox } from "../../components/InfoBox/InfoBox";
import { TransactionTable } from "../../components/TransactionTable/TransactionTable";

const HomePage = () => {
  return <div>
    <p>HomePage</p>
    <BalanceForm />
    <InfoBox />
    <AddTransaction />
    <TransactionTable/>
  </div>;
};

export default HomePage;
