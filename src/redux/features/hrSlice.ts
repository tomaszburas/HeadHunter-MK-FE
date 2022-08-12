import {createSlice} from '@reduxjs/toolkit';

export interface HrState {
  email: string;
  id: string;
  firstName: string;
  lastName: string;
  company: string;
}

const initialState: HrState = {
  email: '',
  id: '',
  firstName: '',
  lastName: '',
  company: '',
};

interface SetHr {
  payload: {
    email: string;
    id: string;
    firstName: string;
    lastName: string;
    company: string;
  };
}

export const hrSlice = createSlice({
  name: 'hr',
  initialState,
  reducers: {
    setHr: (state, action: SetHr) => {
      return {...action.payload};
    },
  },
});

export const {setHr} = hrSlice.actions;
