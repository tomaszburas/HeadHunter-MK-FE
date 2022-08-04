import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux';
import {API_URL} from '../config';
import {setAuth} from '../redux/features/authSlice';
import {ReactNode, useEffect} from 'react';
import {Loader} from '../views/Loader';

interface Props {
  children: ReactNode;
}

export const Auth = ({children}: Props) => {
  const {isAuth, role} = useSelector((store: RootState) => store.auth);
  const dispatch = useDispatch();

  const checkAuth = async () => {
    const res = await fetch(`${API_URL}/auth/check`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    });

    const data = await res.json();

    if (data.success) {
      dispatch(
        setAuth({
          isAuth: true,
          role: data.role,
        })
      );
    } else {
      dispatch(
        setAuth({
          isAuth: false,
          role: null,
        })
      );
    }
  };

  useEffect(() => {
    (async () => {
      await checkAuth();
    })();
  }, [isAuth, role]);

  if (isAuth === null) return <Loader />;

  return <>{children}</>;
};
