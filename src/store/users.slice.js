import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";



import {allServices} from "../services/all.services";


export const getUsers = createAsyncThunk(
    "userSlice/getUsers",
    async () => {
        try {
            const users = await allServices.getAllUsers()
            return users
        } catch (e) {

        }
    }
)

const usersSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: [],
        status : null,
        error : null ,
    },
    reducers: {},
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.status = "loading"
            state.error = null
        },
        [getUsers.fulfilled]: (state, action) => {
            state.users = action.payload
            state.error = null
        },
        [getUsers.rejected] : (state,action) => {
            state.status = "failed"
            state.error = "error"
        }
    }
})

const userReducer = usersSlice.reducer

const {showUsers} = usersSlice.actions

export default userReducer

export const userActions = {
    showUsers
}