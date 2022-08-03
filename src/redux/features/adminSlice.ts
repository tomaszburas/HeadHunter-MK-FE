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

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdmin: (state, action: SetAdmin) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
  },
});

export const {setAdmin} = adminSlice.actions;
