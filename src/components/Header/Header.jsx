import { HeaderContainer } from './Header.styled';
import { Icon } from '../../shared/components/Icon/Icon';

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Icon iconName="icon-logo" width={90} height={31} />
      </HeaderContainer>
    </>
  );
};
