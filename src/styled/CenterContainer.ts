import styled from 'styled-components';

export const CenterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .margin-bottom-sm {
    margin-bottom: ${(props) => props.theme.marginSize.sm};
  }

  .margin-bottom-base {
    margin-bottom: ${(props) => props.theme.marginSize.base};
  }

  .margin-bottom-lg {
    margin-bottom: ${(props) => props.theme.marginSize.lg};
  }

  .margin-bottom-xl2 {
    margin-bottom: ${(props) => props.theme.marginSize.xl2};
  }
`;
