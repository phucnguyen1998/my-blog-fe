import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentApi from "../../Api/commentApi";
import postApi from "../../Api/postApi";

export const getAllPost = createAsyncThunk(
    'posts/getAllPost',
    async () => {
        // call api to get post
        const data = await postApi.getAll()
        // return user data
        return data;
    }
)


export const addComment = createAsyncThunk(
    'comments/addNewComment',
    async (payload, thunkAPI) => {
        // call api to add comment
        await commentApi.addComment(payload)
    }
)

const postSlice = createSlice({
    name: 'post',
    initialState: {
        current: [],
        settings: {}
    },
    reducers: {
    },
    extraReducers: {
        [getAllPost.fulfilled]: (state, action) => {
            state.current = action.payload
        }
    }
})

const { reducer } = postSlice;
export default reducer;