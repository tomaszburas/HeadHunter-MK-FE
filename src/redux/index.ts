import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './features/authSlice';
import {adminSlice} from './features/adminSlice';
import { paginationSlice } from './features/paginationSlice';
import {searchBarSlice} from "./features/searchBarSlice";
import {studentSlice} from './features/studentSlice';
import {usersAddedByHr} from "./features/usersAddedByHr";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    admin: adminSlice.reducer,
    pagination: paginationSlice.reducer,
    name: searchBarSlice.reducer,
    student: studentSlice.reducer,
    users: usersAddedByHr.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
