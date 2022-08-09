import {createSlice} from '@reduxjs/toolkit';
import {StudentState} from '../studentSlice';

export interface StudentsState {
  students: StudentState[] | null;
}

const initialState: StudentsState = {
  students: null,
};

interface SetStudents {
  payload: {
    students: StudentState[];
  };
}

interface RemoveStudent {
  payload: {
    id: string;
  };
}

interface AddStudent {
  payload: {
    student: StudentState;
  };
}

export const availableStudentsSlice = createSlice({
  name: 'hrAvailableStudents',
  initialState,
  reducers: {
    setStudents: (state, action: SetStudents) => {
      state.students = [...action.payload.students];
    },
    removeStudent: (state, action: RemoveStudent) => {
      if (state.students !== null) {
        state.students = [...state.students].filter(
          (student) => student.id !== action.payload.id
        );
      }
    },
    addStudent: (state, action: AddStudent) => {
      if (state.students !== null) {
        state.students = [...state.students, action.payload.student];
      }
    },
  },
});

export const {setStudents, removeStudent, addStudent} =
  availableStudentsSlice.actions;
