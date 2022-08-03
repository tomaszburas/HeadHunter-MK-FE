import {createSlice} from '@reduxjs/toolkit';
import {Role} from '../../types/enums/Role';

export interface AuthState {
  isAuth: boolean | null;
  role: Role | null;
}

const initialState: AuthState = {
  isAuth: null,
  role: null,
};

interface SetAuth {
  payload: {
    isAuth: boolean;
    role: Role;
  };
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: SetAuth) => {
      state.isAuth = action.payload.isAuth;
      state.role = action.payload.role;
    },
  },
});

export const {setAuth} = authSlice.actions;
