import {createSlice} from '@reduxjs/toolkit';

interface State {
  itemsOnPage: string;
  page: number;
  totalPages: number;
}

const initialState: State = {
  itemsOnPage: '1',
  page: 1,
  totalPages: 0,
};

interface Payload {
  payload: {
    pagination: string;
  };
}

interface PayloadPage {
  payload: {
    page: number;
  };
}

interface PayloadTotalPages {
  payload: {
    pages: number;
  };
}

export const toTalkStudentsPaginationSlice = createSlice({
  name: 'toTalkStudentsPagination',
  initialState,
  reducers: {
    setPagination: (state: State, action: Payload) => {
      state.itemsOnPage = action.payload.pagination;
    },
    setPage: (state: State, action: PayloadPage) => {
      state.page = action.payload.page;
    },
    setTotalPages: (state: State, action: PayloadTotalPages) => {
      state.totalPages = action.payload.pages;
    },
  },
});

export const {setPagination, setPage, setTotalPages} =
  toTalkStudentsPaginationSlice.actions;
