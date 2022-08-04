import styled from 'styled-components';

export const Form = styled.form`
  @media only screen and (max-width: 1200px) {
    margin: ${(props) => props.theme.marginSize.base};
  }
`;
