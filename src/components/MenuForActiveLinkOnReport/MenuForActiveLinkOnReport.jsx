import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  ContainerMain,
  Container,
  ButtonIcon,
  TabButton,
} from "./MenuForActiveLinkOnReport.styled";
import { Icon } from "../../shared/components/Icon/Icon";
import { getIncomeCategory } from "../../services/incomeApi";
import { getExpensesCategory } from "../../services/expensesApi";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import {
  CATEGORIES_EXPENSES,
  CATEGORIES_INCOME,
} from "../../constants/globalConstants";
import { BarChartComp } from "../BarChartComp/BarChartComp";

export const MenuForActiveLinkOnReport = ({ date }) => {
  const [activeTab, setActiveTab] = useState("expenses");
  const [expensesCategoriesList, setExpensesCategoriesList] = useState([]);
  const [incomeCategoriesList, setIncomeCategoriesList] = useState([]);

  const [itemCategory, setItemCategory] = useState({});

  const addItemCategory = (data) => {
    setItemCategory(data);
  };

  useEffect(() => {
    if (Object.keys(itemCategory).length === 0 || !itemCategory) return;
  }, [itemCategory]);

  useEffect(() => {
    if (Object.keys(date).length === 0 || !date) return;
  }, [date]);

  useEffect(() => {
    (async () => {
      if (itemCategory.activeTab === "expenses") {
        const {
          data: { report },
        } = await getIncomeCategory(date);
        setIncomeCategoriesList(report);
      } else {
        const {
          data: { report },
        } = await getExpensesCategory(date);
        setExpensesCategoriesList(report);
      }
    })();
  }, [date, itemCategory.activeTab]);

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

        {activeTab === "expenses" && (
          <CategoriesList
            categoriesList={expensesCategoriesList}
            categories={CATEGORIES_EXPENSES}
            activeTab={activeTab}
            addItemCategory={addItemCategory}
          />
        )}
        {activeTab === "income" && (
          <CategoriesList
            categoriesList={incomeCategoriesList}
            categories={CATEGORIES_INCOME}
            activeTab={activeTab}
            addItemCategory={addItemCategory}
          />
        )}
      </ContainerMain>
      <div>
        {" "}
        <BarChartComp categoryItem={itemCategory} date={date}/>
      </div>
    </section>
  );
};

MenuForActiveLinkOnReport.propTypes = {
 date: PropTypes.any
};
