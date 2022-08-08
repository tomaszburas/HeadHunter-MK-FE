import {createSlice} from '@reduxjs/toolkit';
import {Role} from '../../types/enums/Role';

export interface AuthState {
  isAuth: boolean | null;
  role: Role | null;
  id: string | null;
}

const initialState: AuthState = {
  isAuth: null,
  role: null,
  id: null,
};

interface SetAuth {
  payload: {
    isAuth: boolean;
    role: Role | null;
    id: string | null;
  };
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: SetAuth) => {
      state.isAuth = action.payload.isAuth;
      state.role = action.payload.role;
      state.id = action.payload.id;
    },
  },
});

export const {setAuth} = authSlice.actions;
