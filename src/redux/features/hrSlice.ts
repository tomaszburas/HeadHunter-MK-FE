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

export const hrSlice = createSlice({
  name: 'hr',
  initialState,
  reducers: {
    setHr: (state, action: SetAdmin) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    setUsers: () => {

    }
  },
});

export const {setHr} = hrSlice.actions;
