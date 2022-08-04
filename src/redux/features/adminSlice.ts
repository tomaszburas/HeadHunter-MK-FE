import {createSlice} from '@reduxjs/toolkit';

export interface AdminState {
  email: string;
  id: string;
}

const initialState: AdminState = {
  email: '',
  id: '',
};

interface SetAdmin {
  payload: {
    email: string;
    id: string;
  };
}

interface SetAdminEmail {
  payload: {
    email: string;
  };
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdmin: (state, action: SetAdmin) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    setAdminEmail: (state, action: SetAdminEmail) => {
      state.email = action.payload.email;
    },
  },
});

export const {setAdmin, setAdminEmail} = adminSlice.actions;
