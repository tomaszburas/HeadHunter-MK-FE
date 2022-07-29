import styled from 'styled-components';

export const WrapperHr = styled.div`
  background-color: ${(props) => props.theme.colors.darkGray};
  font-size: ${(props) => props.theme.fontSize.sm};
  margin: ${(props) => props.theme.marginSize.base} 0;
`;
