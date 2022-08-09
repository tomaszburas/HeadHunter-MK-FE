import { createSlice } from "@reduxjs/toolkit"
import { AllAvailableUsers } from "../../types/interfaces/Student/EmploymentInterface"

export interface Users {
    users: AllAvailableUsers[],
    user: any
}

const initialState = {
    users: [],
    user: {},
}

export interface Actions {
    payload: {
        user: any,
    }
}

export const usersAddedByHr = createSlice({
    name: 'students',
    initialState,
    reducers: {
        addStudent: (state: Users , actions: Actions ) => {
           state.users.push(actions.payload.user)
        },
        getObject: (state: Users , actions: Actions ) => {
            state.user = actions.payload.user;
        }
    }
})

export const {addStudent, getObject} = usersAddedByHr.actions;