import React from 'react';
import styled from 'styled-components';
import {Route, Routes} from 'react-router-dom';
import {Login} from './views/Login';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path={`/login`} element={<Login />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;
