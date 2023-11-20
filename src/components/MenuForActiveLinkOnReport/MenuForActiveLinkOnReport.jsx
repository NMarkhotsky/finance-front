// import { useState, useEffect } from "react";
// import {
//   ContainerMain,
//   Container,
//   ButtonIcon,
//   TabButton,
// } from "./MenuForActiveLinkOnReport.styled";
// import { Icon } from "../../shared/components/Icon/Icon";
// import { BarChartComp } from "../BarChartComp/BarChartComp";
// import {
//   getIncomeCategory,
//   getIncomeDescription,
// } from "../../services/incomeApi";
// import {
//   getExpensesCategory,
//   getExpensesDescription,
// } from "../../services/expensesApi";
// import { CategoriesList } from "../CategoriesList/CategoriesList";
// import {
//   CATEGORIES_EXPENSES,
//   CATEGORIES_INCOME,
// } from "../../constants/globalConstants";

// export const MenuForActiveLinkOnReport = () => {
//   const [activeTab, setActiveTab] = useState("expenses");
//   const [dataExpenses, setDataExpenses] = useState([]);
//   const [dataIncome, setDataIncome] = useState([]);
//   const [expensesCategoriesList, setExpensesCategoriesList] = useState([]);
//   const [incomeCategoriesList, setIncomeCategoriesList] = useState([]);

//   useEffect(() => {
//     (async () => {
//       const { report } = await getIncomeDescription();
//       setDataIncome(report);
//     })();
//   }, []);

//   useEffect(() => {
//     (async () => {
//       const { report } = await getExpensesDescription();
//       setDataExpenses(report);
//     })();
//   }, []);

//   console.log("dataExpenses", dataExpenses);

//   useEffect(() => {
//     (async () => {
//       const {
//         data: { report },
//       } = await getIncomeCategory();
//       setIncomeCategoriesList(report);
//     })();
//   }, []);

//   useEffect(() => {
//     (async () => {
//       const {
//         data: { report },
//       } = await getExpensesCategory();
//       setExpensesCategoriesList(report);
//     })();
//   }, []);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   console.log("dataExpenses", dataExpenses);

//   return (
//     <section>
//       <ContainerMain>
//         <Container>
//           <ButtonIcon onClick={() => handleTabChange("expenses")}>
//             <Icon iconName="icon-arrow-left" width={4} height={10} />
//           </ButtonIcon>
//           <TabButton $active={activeTab === "expenses"}>Expenses</TabButton>
//           <TabButton $active={activeTab === "income"}>Income</TabButton>
//           <ButtonIcon onClick={() => handleTabChange("income")}>
//             <Icon iconName="icon-arrow-right" width={4} height={10} />
//           </ButtonIcon>
//         </Container>

//         {activeTab === "expenses" && (
//           <CategoriesList
//             categoriesList={expensesCategoriesList}
//             categories={CATEGORIES_EXPENSES}
//           />
//         )}
//         {activeTab === "income" && (
//           <CategoriesList
//             categoriesList={incomeCategoriesList}
//             categories={CATEGORIES_INCOME}
//           />
//         )}
//       </ContainerMain>
//       <div>
//         {activeTab === "expenses" && (
//           <BarChartComp dataTransactions={dataExpenses} />
//         )}
//         {activeTab === "income" && (
//           <BarChartComp dataTransactions={dataIncome} />
//         )}
//       </div>
//     </section>
//   );
// };

import { useState, useEffect } from "react";
import {
  ContainerMain,
  Container,
  ButtonIcon,
  TabButton,
} from "./MenuForActiveLinkOnReport.styled";
import { Icon } from "../../shared/components/Icon/Icon";
// import { BarChartComp } from "../BarChartComp/BarChartComp";
import {
  getIncomeCategory,
  // getIncomeDescription,
} from "../../services/incomeApi";
import {
  getExpensesCategory,
  // getExpensesDescription,
} from "../../services/expensesApi";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import {
  CATEGORIES_EXPENSES,
  CATEGORIES_INCOME,
} from "../../constants/globalConstants";
import { BarChartComp } from "../BarChartComp/BarChartComp";

export const MenuForActiveLinkOnReport = () => {
  const [activeTab, setActiveTab] = useState("expenses");
  // const [dataExpenses, setDataExpenses] = useState([]);
  // const [dataIncome, setDataIncome] = useState([]);
  const [expensesCategoriesList, setExpensesCategoriesList] = useState([]);
  const [incomeCategoriesList, setIncomeCategoriesList] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const { report } = await getIncomeDescription();
  //     setDataIncome(report);
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const { report } = await getExpensesDescription();
  //     setDataExpenses(report);
  //   })();
  // }, []);

  // console.log("dataExpenses", dataExpenses);

  const [itemCategory, setItemCategory] = useState({});

  const addItemCategory = (data) => {
    setItemCategory(data);
  };

  useEffect(() => {
    if (Object.keys(itemCategory).length === 0 || !itemCategory) return;
  }, [itemCategory]);

  console.log("itemCategory", itemCategory);

  useEffect(() => {
    (async () => {
      const {
        data: { report },
      } = await getIncomeCategory();
      setIncomeCategoriesList(report);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const {
        data: { report },
      } = await getExpensesCategory();
      setExpensesCategoriesList(report);
    })();
  }, []);

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
      {/* <div>{itemCategory && <BarChartComp categoryItem={itemCategory} />}</div> */}
    </section>
  );
};
