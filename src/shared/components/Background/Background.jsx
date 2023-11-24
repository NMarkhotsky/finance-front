import { useCurrentPage } from '../../../hooks';
import {
  BackgroundWrapperAuth,
  BackgroundWrapperMain,
  Container,
} from './Background.styled';
import { Icon } from '../Icon/Icon';

export const Background = () => {
  const currentPage = useCurrentPage();

  const page = currentPage === '/login' || currentPage === '/register';

  if (page) {
    return (
      <BackgroundWrapperAuth>
        <Icon iconName="icon-BgKapustaDesk" />
      </BackgroundWrapperAuth>
    );
  } else {
    return (
      <Container>
        <BackgroundWrapperMain>
          <Icon iconName="icon-BgKapustaDesk" />
        </BackgroundWrapperMain>
      </Container>
    );
  }
};
