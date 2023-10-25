import { AddTransaction } from "../../components/AddTransaction/AddTransaction";
import { BalanceForm } from "../../components/BalanceForm/BalanceForm";
import { InfoBox } from "../../components/InfoBox/InfoBox";

const HomePage = () => {
  return <div>
    <p>HomePage</p>
    <BalanceForm />
    <InfoBox />
    <AddTransaction/>
  </div>;
};

export default HomePage;
