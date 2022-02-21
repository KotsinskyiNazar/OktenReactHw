import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {allServices} from "../services/all.services";


export const getComments = createAsyncThunk(
    "commentsSlice/getComments",
    async () => {
        try {
            const comments = await allServices.getAllComments()
            return comments
        } catch (e) {

        }
    }
)


const commentsSlice = createSlice({
    name: "commentsSlice",
    initialState: {
        comments: []
    },
    reducers: {},
    extraReducers: {
        [getComments.pending]: (state, action) => {
            console.log("loading")
        },
        [getComments.fulfilled] : (state,action) => {
            state.comments = action.payload
        },
        [getComments.rejected] : (state,action) =>{

        }
    }
})

const commentsReducer = commentsSlice.reducer

export default commentsReducer