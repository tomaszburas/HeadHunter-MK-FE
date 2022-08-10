import styled from 'styled-components';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Login} from './views/Login';
import {AccountActivation} from './views/AccountActivation';
import {StudentEdit} from './views/Student/StudentEdit';
import {HrAvailableStudents} from './views/Hr/HrAvailableStudents';
import {HrTTStudents} from './views/Hr/HrToTalksStudents';
import {HrStudentCv} from './views/Hr/HrStudentCv';
import {Form} from './components/Form';
import {HrEditForm} from './components/Hr/HrEditForm';
import {StudentMain} from './views/Student/StudentMain';
import {AdminMain} from './views/Admin/AdminMain';
import {AdminEditForm} from './components/Admin/AdminEditForm';
import {AddStudentsForm} from './components/Admin/AddStudentsForm';
import {AddHrForm} from './components/Admin/AddHrForm';
import {RequireAuth} from './components/RequireAuth';
import {Role} from './types/enums/Role';
import {CheckAuth} from './components/CheckAuth';
import {Auth} from './components/Auth';
import {FirstLogin} from './components/Student/FirstLogin';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route
          element={
            <Auth>
              <CheckAuth />
            </Auth>
          }
        >
          <Route path={`/`} element={<Login />} />
        </Route>

        <Route
          path={`/activation/hr/:id/:registerToken`}
          element={<AccountActivation role={Role.HR} />}
        />
        <Route
          path={`/activation/student/:id/:registerToken`}
          element={<AccountActivation role={Role.STUDENT} />}
        />

        {/*STUDENT*/}
        <Route
          element={
            <Auth>
              <RequireAuth userRole={Role.STUDENT} />
            </Auth>
          }
        >
          <Route element={<FirstLogin />}>
            <Route path={`/student`} element={<StudentMain />} />
          </Route>
          <Route path={`/student/account-edit`} element={<StudentEdit />} />
          <Route path={`/student/*`} element={<Navigate to={'/student'} />} />
        </Route>

        {/*ADMIN*/}
        <Route
          element={
            <Auth>
              <RequireAuth userRole={Role.ADMIN} />
            </Auth>
          }
        >
          <Route path={`/admin`} element={<AdminMain />} />
          <Route
            path={`/admin/account-edit`}
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
        </Route>

        {/*HR*/}
        <Route
          element={
            <Auth>
              <RequireAuth userRole={Role.HR} />
            </Auth>
          }
        >
          <Route path={`/hr/available`} element={<HrAvailableStudents />} />
          <Route path={`/hr/to-talk`} element={<HrTTStudents/>}/>
          <Route path={`/hr/cv/:id`} element={<HrStudentCv/>}/>
          <Route
              path={`/hr/account-edit`}
              element={<Form title="Edycja konta" children={<HrEditForm/>}/>}
          />
          <Route path={`/hr/*`} element={<Navigate to={'/hr/available'} />} />
        </Route>

        <Route path={`/*`} element={<Login />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }

  @media only screen and (min-width: 2000px) {
    width: 1600px;
  }
`;
