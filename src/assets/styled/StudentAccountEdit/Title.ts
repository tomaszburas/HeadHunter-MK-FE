import styled from 'styled-components';

export const Title = styled.div`
  background-color: ${(props) => props.theme.colors.darkGray};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.paddingSize.base};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: bold;
`;
