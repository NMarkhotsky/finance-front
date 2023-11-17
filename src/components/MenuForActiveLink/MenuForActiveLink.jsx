import { useEffect, useState } from "react";
import {
  NavLinkList,
  NavLinkItem,
  ContainerTransaction,
  Container,
  AddTransactionBox,
  TransactionTableBox,
  TablesWrapper
} from "./MenuForActiveLink.styled";
import { CurrentDay } from "../CurrentDay/CurrentDay";
import { AddTransaction } from "../AddTransaction/AddTransaction";
import { TransactionTable } from "../TransactionTable/TransactionTable";
import { TransactionTableMobile } from "../TransactionTable/TransactionTableMobile";
import { SummaryTable } from "../SummaryTable/SummaryTable";

export const MenuForActiveLink = () => {

  const [activeTab, setActiveTab] = useState("expenses");
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  
  useEffect(() => {
    
    const updateScreenSize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', updateScreenSize);

    return () => window.addEventListener('resize', updateScreenSize);

  },[])

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  // const ExpensesTabContent = () => {
  //   return (
  //     <div style={{display: "flex", justifyContent: "space-between", marginTop: 60}}>
  //       <TransactionTable type="expenses"/>
  //       <div>Summary</div>
  //     </div>
  //   );
  // };

  // const IncomeTabContent = () => {
  //   return (
  //     <div style={{display: "flex", justifyContent: "space-between", marginTop: 60}}>
  //       <TransactionTable type="income"/>
  //       <div>Summary</div>
  //     </div>
  //   );
  // };

  return (
    <Container>
      <div>
        <NavLinkList>
          <NavLinkItem
            onClick={() => switchTab("expenses")}
            $isActive={activeTab === "expenses"}
          >
            expenses
          </NavLinkItem>
          <NavLinkItem
            onClick={() => switchTab("income")}
            $isActive={activeTab === "income"}
          >
            income
          </NavLinkItem>
        </NavLinkList>
      </div>
      <div>
        <ContainerTransaction>
          <AddTransactionBox>
            <CurrentDay />
            <AddTransaction type={activeTab} />
          </AddTransactionBox>
          <TransactionTableBox>
            {screenSize < 768 ?
              <TransactionTableMobile type={activeTab} /> :
              (<TablesWrapper>
                <TransactionTable type={activeTab} />
                <SummaryTable type={activeTab}/>
              </TablesWrapper>
              )}
          </TransactionTableBox>
        </ContainerTransaction>
      </div>
    </Container>
  );
};
