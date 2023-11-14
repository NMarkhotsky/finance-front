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

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <div>
        <NavLinkList>
          <NavLinkItem
            onClick={() => switchTab("expenses")}
            isActive={activeTab === "expenses"}
          >
            expenses
          </NavLinkItem>
          <NavLinkItem
            onClick={() => switchTab("income")}
            isActive={activeTab === "income"}
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
