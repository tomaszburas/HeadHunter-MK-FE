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

  .input-box {
    width: 100%;
    display: flex;

    .box {
      margin-left: ${(props) => props.theme.marginSize.base};

      input {
        transform: scale(1.5);
      }

      label {
        width: auto;
        margin-left: ${(props) => props.theme.marginSize.sm};
        font-size: ${(props) => props.theme.fontSize.sm};
        color: ${(props) => props.theme.colors.white};
      }
    }

    .remove-link,
    .add-link {
      background-color: ${(props) => props.theme.colors.red};
      color: ${(props) => props.theme.colors.white};
      padding: 0 ${(props) => props.theme.paddingSize.sm};
      font-size: ${(props) => props.theme.fontSize.sm};
      border: none;
      cursor: pointer;
      margin-left: ${(props) => props.theme.marginSize.sm};
    }

    .remove-link {
      padding: 0 calc(${(props) => props.theme.paddingSize.sm} * 1.3);
    }
  }
`;
