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

  useEffect(() => {
    if (Object.keys(date).length === 0 || !date) return;
  }, [date]);

  // useEffect(() => {
  //   (async () => {
  //     if (itemCategory.activeTab === "expenses") {
  //       const {
  //         data: { report },
  //       } = await getIncomeCategory(date);
  //       console.log("reportInc", report);
  //       setIncomeCategoriesList(report);
  //     } else {
  //       const {
  //         data: { report },
  //       } = await getExpensesCategory(date);
  //       console.log("reportExp", report);
  //       setExpensesCategoriesList(report);
  //     }
  //   })();
  // }, [date, itemCategory]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { report },
        } = await getIncomeCategory(date);
        if (!report) return;
        setIncomeCategoriesList(report);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [date]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { report },
        } = await getExpensesCategory(date);
        setExpensesCategoriesList(report);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [date]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  console.log("date", date);

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
            date={date}
          />
        )}
        {activeTab === "income" && (
          <CategoriesList
            categoriesList={incomeCategoriesList}
            categories={CATEGORIES_INCOME}
            activeTab={activeTab}
            date={date}
          />
        )}
      </ContainerMain>
      <div>
        <BarChartComp />
      </div>
    </section>
  );
};

MenuForActiveLinkOnReport.propTypes = {
  date: PropTypes.any,
};
