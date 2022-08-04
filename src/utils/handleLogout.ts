import {Dispatch} from 'redux';
import {API_URL} from '../config';
import {setAuth} from '../redux/features/authSlice';

export const handleLogout = async (dispatch: Dispatch<any>) => {
  const res = await fetch(`${API_URL}/auth/logout`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
  });
  const data = await res.json();

  if (data.success) {
    dispatch(setAuth({isAuth: false, role: null}));
  }
};
