import { useState } from "react";
import {
  ContainerMain,
  Container,
  ButtonIcon,
  ListItem,
  TabButton,
} from "./MenuForActiveLinkOnReport.styled";
import { Icon } from "../../shared/components/Icon/Icon";

export const MenuForActiveLinkOnReport = () => {
  const [activeTab, setActiveTab] = useState("expenses");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <ContainerMain>
      <Container>
        <ButtonIcon onClick={() => handleTabChange("expenses")}>
          <Icon iconName="icon-arrow-left" width={4} height={10} />
        </ButtonIcon>
        <TabButton
          active={activeTab === "expenses"}
        >
          Expenses
        </TabButton>
        <TabButton
          active={activeTab === "income"}
        >
          Income
        </TabButton>
        <ButtonIcon onClick={() => handleTabChange("income")}>
          <Icon iconName="icon-arrow-right" width={4} height={10} />
        </ButtonIcon>
      </Container>
      <div>
            {activeTab === "expenses" && <ExpensesTabContent />}
            {activeTab === "income" && <IncomeTabContent />}
      </div>
    </ContainerMain>
  );
};

function ExpensesTabContent() {
    return (
        <ListItem>
 <li>Expenses</li>
        </ListItem>
    )
  }
  
  function IncomeTabContent() {
    return (
        <ListItem>
 <li>Income</li>
        </ListItem>
    )
  }
