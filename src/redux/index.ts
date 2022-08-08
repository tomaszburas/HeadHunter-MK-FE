import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './features/authSlice';
import {adminSlice} from './features/adminSlice';
import {studentSlice} from './features/studentSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    admin: adminSlice.reducer,
    student: studentSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
