import {createSlice} from '@reduxjs/toolkit';
import {Role} from '../../types/enums/Role';
import {WorkType} from '../../types/enums/WorkType';
import {ContractType} from '../../types/enums/ContractType';

export interface UserState {
  isAuth: null | boolean;
  role: Role | '';
  data?: UserDataHr | UserDataAdmin | UserDataStudent;
}

interface UserDataHr {
  fullName: string;
  company: string;
  email: string;
  id: string;
  active: boolean;
}

interface UserDataAdmin {
  fullName: string;
  email: string;
  id: string;
}

interface UserDataStudent {
  id: string;
  active: boolean;
  fullName: string;
  email: string;
  phone: string;
  usernameGh: string;
  aboutMe: string;
  workplace: WorkType;
  contract: ContractType;
  experienceMonth: '' | number;
  city: string;
  salary: '' | number;
  internships: boolean;
  education: string;
  course: string;
  experience: string;
  linkPortfolio: string[];
  linkProject: string[];
  linkScrum: string[];
}

const initialState: UserState = {
  isAuth: null,
  role: '',
};

interface SetUserAuth {
  payload: {
    isAuth: boolean;
    role: Role;
  };
}

interface SetUserDataHr {
  payload: UserDataHr;
}

interface SetUserDataAdmin {
  payload: UserDataAdmin;
}

interface SetUserDataStudent {
  payload: UserDataStudent;
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuth: (state, action: SetUserAuth) => {
      state.isAuth = action.payload.isAuth;
      state.role = action.payload.role;
    },
    setUserDataHr: (state, action: SetUserDataHr) => {
      state.data = action.payload;
    },
    setUserDataAdmin: (state, action: SetUserDataAdmin) => {
      state.data = action.payload;
    },
    setUserDataStudent: (state, action: SetUserDataStudent) => {
      state.data = action.payload;
    },
  },
});

export const {
  setUserAuth,
  setUserDataHr,
  setUserDataAdmin,
  setUserDataStudent,
} = userSlice.actions;
