import {useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {Loader} from '../views/Loader';
import {Role} from '../types/enums/Role';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux';
import {setUserAuth, setUserDataAdmin} from '../redux/features/userSlice';

export const ProtectedRoute = (): any => {
  const {isAuth, role} = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        const user = {
          role: Role.ADMIN,
          data: {
            fullName: 'jan kowalski',
            email: 'eee@ss.pl',
            id: 'sdsdsds',
          },
        };

        dispatch(
          setUserAuth({
            isAuth: true,
            role: user.role,
          })
        );

        if (user.role === Role.ADMIN) {
          dispatch(
            setUserDataAdmin({
              ...user.data,
            })
          );
        }
      }, 2000);
    })();
  }, [dispatch]);

  if (isAuth === null) return <Loader />;

  if (!isAuth) {
    return <Navigate to={`/login`} />;
  }

  if (isAuth) {
    if (role === Role.ADMIN) {
      return <Navigate to={`/admin`} />;
    }

    if (role === Role.USER) {
      return <Navigate to={`/student`} />;
    }

    if (role === Role.HR) {
      return <Navigate to={`/hr`} />;
    }
  }
};
