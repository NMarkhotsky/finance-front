import { useState, useEffect } from "react";
import {
  ContainerMain,
  Container,
  ButtonIcon,
  TabButton,
} from "./MenuForActiveLinkOnReport.styled";
import { Icon } from "../../shared/components/Icon/Icon";
import { BarChartComp } from "../BarChartComp/BarChartComp";
import {
  getIncomeCategory,
  getIncomeDescription,
} from "../../services/incomeApi";
import {
  getExpensesCategory,
  getExpensesDescription,
} from "../../services/expensesApi";
import { CategoriesList } from "../CategoriesList/CategoriesList";

export const MenuForActiveLinkOnReport = () => {
  const [activeTab, setActiveTab] = useState("expenses");
  const [dataExpenses, setDataExpenses] = useState([]);
  const [dataIncome, setDataIncome] = useState([]);
  const [expensesCategoriesList, setExpensesCategoriesList] = useState([]);
  const [incomeCategoriesList, setIncomeCategoriesList] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        data: { report },
      } = await getIncomeDescription();
      setDataIncome(report);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const {
        data: { report },
      } = await getExpensesDescription();
      setDataExpenses(report);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data : {report} } = await getIncomeCategory();
      console.log("income", report);
        setIncomeCategoriesList(report);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const {data : {report}} = await getExpensesCategory();
      console.log("expenses", report);
        setExpensesCategoriesList(report);
    })();
  }, []);

  console.log("incomeCategoriesList", incomeCategoriesList);
  console.log("expensesCategoriesList", expensesCategoriesList);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
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

        {/* {activeTab === "expenses" && <CategoriesList categoriesList={expensesCategoriesList} />} */}
        {/* {activeTab === "income" && <CategoriesList categoriesList={incomeCategoriesList} />} */}
      </ContainerMain>
      <div>
        {activeTab === "expenses" && (

          <BarChartComp dataTransactions={dataExpenses} />
        )}
        {activeTab === "income" && (
          <BarChartComp dataTransactions={dataIncome} />
        )}
      </div>
    </section>
  );
};
