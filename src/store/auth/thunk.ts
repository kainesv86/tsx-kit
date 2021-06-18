import { createAsyncThunk } from "@reduxjs/toolkit";

import { UserLoginDto } from "../../common/interface/dto/auth.dto";
import { AuthAPI, authApi } from "../../api/authApi";

class AuthThunk {
        constructor(private readonly apiCall: AuthAPI) {}

        loginUser = createAsyncThunk<null, UserLoginDto>("UserLoginDto", async (input) => {
                await this.apiCall.loginUser(input);
                return null;
        });
}
