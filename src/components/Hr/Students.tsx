import React from 'react';
import styled from 'styled-components';
import {Student} from './Student';

export const Students = () => {
  return (
    <Container>
      <Student />
      <Student />
      <Student />
      <Student />
      <Student />
    </Container>
  );
};

const Container = styled.div`
  padding: ${(props) => props.theme.paddingSize.base};
`;
