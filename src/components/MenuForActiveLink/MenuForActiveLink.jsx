import {
  Container,
  NavLinkList,
  NavLinkItem, ContainerTransaction
} from "./MenuForActiveLink.styled";

export const MenuForActiveLink = () => {
  return (
    <Container>
      <NavLinkList>
        <li>
          <NavLinkItem to="#">expenses</NavLinkItem>
        </li>
        <li>
          <NavLinkItem to="#">income</NavLinkItem>
        </li>
      </NavLinkList>
      <ContainerTransaction></ContainerTransaction>
    </Container>
  );
};
