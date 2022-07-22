import styled from 'styled-components';

export const Textarea = styled.textarea`
  width: 100%;
  padding: ${(props) => props.theme.paddingSize.sm};
  border: none;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  height: calc(2 * ${(props) => props.theme.paddingSize.sm} + 4rem);
  resize: none;

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.white};
  }
`;
