import {Header} from './Header/Header';
import styled from 'styled-components';
import {ReactNode} from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

export const Form = ({title, children}: Props) => {
  return (
    <>
      <Header />
      <Wrapper>
        <Title>{title}</Title>
        {children}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  font-size: ${(props) => props.theme.fontSize.sm};
  margin: ${(props) => props.theme.marginSize.base} 0;

  @media only screen and (max-width: 1200px) {
    margin: ${(props) => props.theme.marginSize.base};
  }
`;

const Title = styled.h1`
  background-color: ${(props) => props.theme.colors.darkGray};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.paddingSize.base};
`;
