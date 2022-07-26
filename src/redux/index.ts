import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './features/authSlice';
import {adminSlice} from './features/adminSlice';
import {searchBarSlice} from './features/searchBarSlice';
import {studentSlice} from './features/studentSlice';
import {hrSlice} from './features/hrSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    admin: adminSlice.reducer,
    name: searchBarSlice.reducer,
    student: studentSlice.reducer,
    hr: hrSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
