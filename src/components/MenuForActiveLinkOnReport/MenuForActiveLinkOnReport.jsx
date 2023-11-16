import { useState, useEffect } from "react";
import {
  ContainerMain,
  Container,
  ButtonIcon,
  ListItem,
  TabButton,
} from "./MenuForActiveLinkOnReport.styled";
import { Icon } from "../../shared/components/Icon/Icon";
import { BarChartComp } from "../BarChartComp/BarChartComp";
import { getIncome } from "../../services/incomeApi";
import { getExpenses } from "../../services/expensesApi";
import { ShowToast } from "../../utils/showToast";

export const MenuForActiveLinkOnReport = () => {
  const [activeTab, setActiveTab] = useState("expenses");
  const [dataExpenses, setDataExpenses] = useState([]);
  const [dataIncome, setDataIncome] = useState([]);


  if(dataExpenses.length === 0) {
    ShowToast("error", "Its bad")
  }

  useEffect(() => {
    (async () => {
      const dataTrans = await getIncome();
      console.log(dataTrans);
      setDataIncome(dataTrans);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const dataTrans = await getExpenses();
      setDataExpenses(dataTrans);
    })();
  }, []);

  console.log("dataExpenses", dataExpenses);
  console.log("dataIncome", dataIncome);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const ExpensesTabContent = () => {
    return (
      <ListItem>
        <li>Expenses</li>
        <li>Expenses</li>
        <li>Expenses</li>
        <li>Expenses</li>
        <li>Expenses</li>
        <li>Expenses</li>
      </ListItem>
    );
  };

  const IncomeTabContent = () => {
    return (
      <ListItem>
        <li>Income</li>
        <li>Income</li>
        <li>Income</li>
        <li>Income</li>
        <li>Income</li>
        <li>Income</li>
      </ListItem>
    );
  };

  const ExpensesTabChartBar = () => {
    return (
      <>
        <BarChartComp dataTransactions={dataExpenses} />
      </>
    );
  };

  const IncomeTabChartBar = () => {
    return (
      <>
        <BarChartComp dataTransactions={dataIncome} />
      </>
    );
  };

  return (
   <section>
      <ContainerMain>
        <Container>
          <ButtonIcon onClick={() => handleTabChange("expenses")}>
            <Icon iconName="icon-arrow-left" width={4} height={10} />
          </ButtonIcon>
          <TabButton $active={activeTab === "expenses"}>Expenses</TabButton>
          <TabButton $active={activeTab === "income"}>Income</TabButton>
          <ButtonIcon onClick={() => handleTabChange("income")}>
            <Icon iconName="icon-arrow-right" width={4} height={10} />
          </ButtonIcon>
        </Container>
  
        {activeTab === "expenses" && <ExpensesTabContent />}
        {activeTab === "income" && <IncomeTabContent />}
      </ContainerMain>
            <div>
            {activeTab === "expenses" && <ExpensesTabChartBar />}
            {activeTab === "income" && <IncomeTabChartBar />}
          </div>
   </section>
  );
};
