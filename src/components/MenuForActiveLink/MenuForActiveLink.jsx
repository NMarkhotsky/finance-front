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
            {/* <Item> */}
              <NavLinkItem onClick={() => switchTab("expenses")}>
                expenses
              </NavLinkItem>
            {/* </Item> */}
            {/* <Item> */}
              <NavLinkItem onClick={() => switchTab("income")}>income</NavLinkItem>
            {/* </Item> */}
          </NavLinkList>
      </div>
    <div>
        <ContainerTransaction>
            {activeTab === "expenses" && <ExpensesTabContent />}
            {activeTab === "income" && <IncomeTabContent />}
          </ContainerTransaction>
    </div>
    </Container>
    // <Container>
    //   <NavLinkList>
    //     <li>
    //       <NavLinkItem to="#">expenses</NavLinkItem>
    //     </li>
    //     <li>
    //       <NavLinkItem to="#">income</NavLinkItem>
    //     </li>
    //   </NavLinkList>
    //   <ContainerTransaction></ContainerTransaction>
    // </Container>
  );
};

function ExpensesTabContent() {
  return <div>Вміст вкладки Витрати</div>;
}

function IncomeTabContent() {
  return <div>Вміст вкладки Доходи</div>;
}
