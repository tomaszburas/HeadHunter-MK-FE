import styled from 'styled-components';

export const LoginForm = styled.form`
  width: 30%;

  @media only screen and (max-width: 1200px) {
    width: 50%;
  }

  @media only screen and (max-width: 800px) {
    width: 70%;
  }

  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;
