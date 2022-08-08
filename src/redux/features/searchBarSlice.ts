import {createSlice} from "@reduxjs/toolkit";

interface Name {
    name: string;
}

const initialState: Name = {
    name: '',
}

interface Payload {
    payload: {
        name: string;
    }
}

export const searchBarSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        searchName: (state: Name, actions: Payload) => {
            state.name = actions.payload.name
        }
    }
})

export const {searchName} = searchBarSlice.actions;