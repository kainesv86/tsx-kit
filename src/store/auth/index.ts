import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../common/interface/dto/auth.dto";
import { authThunk } from "./thunk";

const initialState: AuthState = {
        username: "",
        fullname: "",
        email: "",
        isLogin: false,
};

const auth = createSlice({
        name: "auth",
        initialState,
        reducers: {
                resetAuth: () => {
                        return initialState;
                },
        },
        extraReducers: (builder) => {
                builder.addCase(authThunk.loginUser.fulfilled, (state) => ({ ...state, isLogin: true }));
        },
});

export const authActions = { ...auth.actions };

export const authReducer = auth.reducer;
