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
import { getIncomeDescription } from "../../services/incomeApi";
import { getExpensesDescription } from "../../services/expensesApi";

export const MenuForActiveLinkOnReport = () => {
  const [activeTab, setActiveTab] = useState("expenses");
  const [dataExpenses, setDataExpenses] = useState([]);
  const [dataIncome, setDataIncome] = useState([]);

  useEffect(() => {
    (async () => {
      const {data : {report}} = await getIncomeDescription();
      setDataIncome(report);
    })();
  }, []);

  console.log(dataExpenses);

  useEffect(() => {
    (async () => {
      const {data : {report}} = await getExpensesDescription();
      setDataExpenses(report);
    })();
  }, []);

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
            {activeTab === "expenses" &&  <BarChartComp dataTransactions={dataExpenses} />}
            {activeTab === "income" && <BarChartComp dataTransactions={dataIncome} />}
          </div>
   </section>
  );
};
