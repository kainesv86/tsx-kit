import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../common/interface/dto/auth.dto";

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
        extraReducers: (builder) => {},
});

export const authActions = { resetAuth: auth.actions.resetAuth };

export const authReducer = auth.reducer;
