import styled from 'styled-components';

export const LoginForm = styled.form`
  width: 30%;

  .reset-password-box {
    margin-top: ${(props) => props.theme.marginSize.base};
    font-size: ${(props) => props.theme.fontSize.m};
    cursor: pointer;
    text-align: right;
  }

  .back-btn-box {
    button {
      margin-top: ${(props) => props.theme.marginSize.sm};
      background-color: ${(props) => props.theme.colors.darkBlue};
    }
  }

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
