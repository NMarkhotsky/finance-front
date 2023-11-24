import { Bgd } from '../../../shared/components/Background/Background.styled';
import { Icon } from '../../../shared/components/Icon/Icon';
import { Hero } from '../../Hero/Hero';
import { AuthContainer, Form } from './AuthForm.styled';

// eslint-disable-next-line react/prop-types
export const AuthForm = ({ children, onSubmit }) => {
  return (
    <>
      <AuthContainer>
        <Hero />
        <Form onSubmit={onSubmit}>{children}</Form>
        <Bgd>
          <Icon
            iconName="icon-BgKapustaDeskSecondary"
            width={'100%'}
            height={'100%'}
          />
        </Bgd>
      </AuthContainer>
    </>
  );
};
