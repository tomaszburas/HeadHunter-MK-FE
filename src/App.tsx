import React from 'react';
import styled from 'styled-components';
import {Route, Routes} from 'react-router-dom';
import {Login} from './views/Login';
import {AccountActivation} from './views/AccountActivation';
import {StudentEdit} from './views/StudentEdit';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path={`/login`} element={<Login />} />
        <Route path={`/activation`} element={<AccountActivation />} />
        <Route path={`/student/edit`} element={<StudentEdit />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;
