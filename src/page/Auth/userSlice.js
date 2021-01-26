import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../Api/userApi";
import StorageKeys from './../../constants/storage-keys'

export const register = createAsyncThunk(
    'users/register',
    async (payload, thunkAPI) => {
        // call api to register user
        const data = await userApi.register(payload)
        // save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt)
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

        // return user data
        return data.user;
    }
)

export const login = createAsyncThunk(
    'users/login',
    async (payload, thunkAPI) => {
        // call api to register user
        const data = await userApi.login(payload)
        // save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt)
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

        // return user data
        return data.user;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {}
    },
    reducers: {
        logout(state) {
            // clear localStorage
            localStorage.removeItem(StorageKeys.USER)
            localStorage.removeItem(StorageKeys.TOKEN)
            // reset current
            state.current = {}
        }
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload
        },

        [login.fulfilled]: (state, action) => {
            state.current = action.payload
        }
    }
})

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;