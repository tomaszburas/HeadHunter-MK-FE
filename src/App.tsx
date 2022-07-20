import React from 'react';
import styled from 'styled-components';

export const App = () => {
  return <Container>Head Hunter</Container>;
};

const Container = styled.div`
  font-size: ${(props) => props.theme.fontSize.base};
`;
