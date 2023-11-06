import { createSlice,PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    token: "",
    user: "",
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        useRegister(state, action:PayloadAction<{token:string}>) {
            state.token = action.payload.token;
        },
        useLogin(state, action:PayloadAction<{accessToken:string,user:string}>) {
            state.token = action.payload.accessToken ;
            state.user = action.payload.user;
        },
        useLogout(state) {
            state.token = "";
            state.user = "";
        },
    },
});

export const { useRegister,useLogin,useLogout } = authSlice.actions;

export default authSlice.reducer;
