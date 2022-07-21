import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: ${(props) => props.theme.paddingSize.sm};
  margin-bottom: ${(props) => props.theme.marginSize.sm};
  border: none;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.white};
  }
`;
