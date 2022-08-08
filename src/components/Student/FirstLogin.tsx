import {useSelector} from 'react-redux';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {RootState} from '../../redux';

export const FirstLogin = () => {
  const {firstLogin} = useSelector((store: RootState) => store.student);
  const location = useLocation();

  return !firstLogin ? (
    <Outlet />
  ) : (
    <Navigate to="/student/account-edit" state={{from: location}} replace />
  );
};
