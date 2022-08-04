import {useSelector} from 'react-redux';
import {RootState} from '../redux';
import {Navigate, Outlet, useLocation} from 'react-router-dom';

export const CheckAuth = () => {
  const {isAuth, role} = useSelector((store: RootState) => store.auth);
  const location = useLocation();

  return !isAuth ? (
    <Outlet />
  ) : (
    role && <Navigate to={role} state={{from: location}} replace />
  );
};
