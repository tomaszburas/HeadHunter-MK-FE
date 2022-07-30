import React from 'react';
import styled from 'styled-components';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Login} from './views/Login';
import {AccountActivation} from './views/AccountActivation';
import {StudentEdit} from './views/Student/StudentEdit';
import {HrAvailableStudents} from './views/Hr/HrAvailableStudents';
import {HrTTStudents} from './views/Hr/HrToTalkStudents';
import {HrStudentCv} from './views/Hr/HrStudentCv';
import {Form} from './components/Form';
import {HrEditForm} from './components/Hr/HrEditForm';
import {StudentMain} from './views/Student/StudentMain';
import {AdminMain} from './views/Admin/AdminMain';
import {AdminEditForm} from './components/Admin/AdminEditForm';
import {AddStudentsForm} from './components/Admin/AddStudentsForm';
import {AddHrForm} from './components/Admin/AddHrForm';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path={`/login`} element={<Login />} />
        <Route path={`/activation`} element={<AccountActivation />} />

        <Route path={`/student`} element={<StudentMain />} />
        <Route path={`/student/edit`} element={<StudentEdit />} />
        <Route path={`/student/*`} element={<Navigate to={'/student'} />} />

        <Route path={`/admin`} element={<AdminMain />} />
        <Route
          path={`/admin/edit`}
          element={<Form title="Edycja konta" children={<AdminEditForm />} />}
        />
        <Route
          path={`/admin/add-students`}
          element={
            <Form title="Dodaj kursantów" children={<AddStudentsForm />} />
          }
        />
        <Route
          path={`/admin/add-hr`}
          element={<Form title="Dodaj hr" children={<AddHrForm />} />}
        />
        <Route path={`/admin/*`} element={<Navigate to={'/admin'} />} />

        <Route path={`/hr/available`} element={<HrAvailableStudents />} />
        <Route path={`/hr/to-talk`} element={<HrTTStudents />} />
        <Route path={`/hr/cv`} element={<HrStudentCv />} />
        <Route
          path={`/hr/account-edit`}
          element={<Form title="Edycja konta" children={<HrEditForm />} />}
        />
        <Route path={`/hr/*`} element={<Navigate to={'/hr/available'} />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;
