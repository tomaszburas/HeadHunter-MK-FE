import React from 'react';
import styled from 'styled-components';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Login} from './views/Login';
import {AccountActivation} from './views/AccountActivation';
import {StudentEdit} from './views/StudentEdit';
import {HrAvailableStudents} from './views/HrAvailableStudents';
import {HrTTStudents} from './views/HrTTStudents';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path={`/login`} element={<Login />} />
        <Route path={`/activation`} element={<AccountActivation />} />
        <Route path={`/student/edit`} element={<StudentEdit />} />
        <Route path={`/hr/available`} element={<HrAvailableStudents />} />
        <Route path={`/hr/to-talk`} element={<HrTTStudents />} />
        <Route path={`/hr/*`} element={<Navigate to={'/hr/available'} />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;
