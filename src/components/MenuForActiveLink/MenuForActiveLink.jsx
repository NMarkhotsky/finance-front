import {
  NavLinkList,
  NavLinkItem,
  ContainerTransaction,
  // Item,
  Container,
} from "./MenuForActiveLink.styled";

import { useState } from "react";

export const MenuForActiveLink = () => {
  const [activeTab, setActiveTab] = useState("expenses");

 console.log("Hello world");

  const switchTab = (tab) => {
    console.log("tab", tab);
    console.log("Click");
    setActiveTab(tab);
  };

  console.log("activeTab", activeTab );

  return (
    <Container>
      <div>
        <NavLinkList>
          <NavLinkItem
            onClick={() => switchTab("expenses")}
            className={activeTab === "expenses" ? "active" : ""}
          >
            expenses
          </NavLinkItem>
          <NavLinkItem
            onClick={() => switchTab("income")}
            className={activeTab === "income" ? "active" : ""}
          >
            income
          </NavLinkItem>
        </NavLinkList>
      </div>
      <div>
        <ContainerTransaction>
          {activeTab === "expenses" && <ExpensesTabContent />}
          {activeTab === "income" && <IncomeTabContent />}
        </ContainerTransaction>
      </div>
    </Container>
  );
};

function ExpensesTabContent() {
  return <div>Вміст вкладки Витрати</div>;
}

function IncomeTabContent() {
  return <div>Вміст вкладки Доходи</div>;
}
