import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {Role} from '../types/enums/Role';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';

interface Props {
  userRole: Role;
}

export const RequireAuth = ({userRole}: Props) => {
  const {isAuth, role} = useSelector((store: RootState) => store.auth);
  const location = useLocation();

  return role === userRole ? (
    <Outlet />
  ) : isAuth ? (
    role && <Navigate to={role} state={{from: location}} replace />
  ) : (
    <Navigate to="/" state={{from: location}} replace />
  );
};
