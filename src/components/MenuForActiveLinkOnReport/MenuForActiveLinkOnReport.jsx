import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  ContainerMain,
  Container,
  ButtonIcon,
  TabButton,
} from './MenuForActiveLinkOnReport.styled';
import { Icon } from '../../shared/components/Icon/Icon';
import { getIncomeCategory } from '../../services/incomeApi';
import { getExpensesCategory } from '../../services/expensesApi';
import { CategoriesList } from '../CategoriesList/CategoriesList';
import {
  CATEGORIES_EXPENSES,
  CATEGORIES_INCOME,
} from '../../constants/globalConstants';
import { BarChartComp } from '../BarChartComp/BarChartComp';
// import { useMyContext } from "../../utils";
import { Loader } from '../../shared/components/Loader/Loader';

export const MenuForActiveLinkOnReport = ({ date }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('expenses');
  const [expensesCategoriesList, setExpensesCategoriesList] = useState([]);
  const [incomeCategoriesList, setIncomeCategoriesList] = useState([]);

  const tabs = ['expenses', 'income'];
  const [loading, setLoading] = useState(true);
  // const { itemCategory } = useMyContext();

  useEffect(() => {
    if (Object.keys(date).length === 0 || !date) return;
  }, [date]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (activeTab === 'income') {
          const { data } = await getIncomeCategory(date);
          setIncomeCategoriesList(data.report);
        } else {
          const { data } = await getExpensesCategory(date);
          setExpensesCategoriesList(data.report);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [date, activeTab]);

  if (loading) {
    return <Loader />;
  }

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const {
  //         data: { report },
  //       } = await getIncomeCategory(date);
  //       if (!report) return;
  //       setIncomeCategoriesList(report);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, [date]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const {
  //         data: { report },
  //       } = await getExpensesCategory(date);
  //       setExpensesCategoriesList(report);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, [date]);

  const handleTabChange = direction => {
    const currentIndex = tabs.indexOf(activeTab);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
    } else if (direction === 'next') {
      newIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
    }

    setActiveTab(tabs[newIndex]);
  };

  return (
    <section>
      <ContainerMain>
        <Container>
          <ButtonIcon onClick={() => handleTabChange("prev")}>
            <Icon iconName="icon-arrow-left" width={7} height={12} />
          </ButtonIcon>
          <TabButton $active={activeTab === "expenses"}>
            {t("transaction_type_expenses")}
          </TabButton>
          <TabButton $active={activeTab === "income"}>
            {t("transaction_type_income")}
          </TabButton>
          <ButtonIcon onClick={() => handleTabChange("next")}>
            <Icon iconName="icon-arrow-right" width={7} height={12} />
          </ButtonIcon>
        </Container>

        {activeTab === 'expenses' && (
          <CategoriesList
            categoriesList={expensesCategoriesList}
            categories={CATEGORIES_EXPENSES}
            activeTab={activeTab}
            date={date}
          />
        )}
        {activeTab === 'income' && (
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
