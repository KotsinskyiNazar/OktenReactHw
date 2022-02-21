import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {allServices} from "../services/all.services";

export const getPosts = createAsyncThunk(
    "postsSlcie/getPosts",
    async () => {
        try {
            const posts = await allServices.getAllPost()
            return posts
        } catch (e) {

        }
    }
)


const postsSlice = createSlice({
    name: "postsSlice",
    initialState: {
        posts: []

    },
    reducers: {},
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            console.log("loaded")
        },
        [getPosts.fulfilled] : (state,action) =>{
            state.posts = action.payload
        },
        [getPosts.rejected] : (state,action) =>{

        }
    }
})


const postsReducer = postsSlice.reducer

export default postsReducer