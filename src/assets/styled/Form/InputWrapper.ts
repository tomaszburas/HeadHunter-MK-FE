import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  margin: ${(props) => props.theme.marginSize.sm} 0;
  display: flex;
  align-items: center;

  .label-box {
    font-size: ${(props) => props.theme.fontSize.sm};
    width: 40%;
    margin-right: 5%;
    padding-left: ${(props) => props.theme.paddingSize.base};
  }

  label {
    cursor: pointer;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    margin: ${(props) => props.theme.marginSize.base} 0;

    .label-box {
      width: 100%;
      margin-bottom: ${(props) => props.theme.marginSize.sm};
    }
  }
`;
