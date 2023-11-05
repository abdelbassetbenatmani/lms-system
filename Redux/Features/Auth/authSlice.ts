import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: "",
    user: "",
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        useRegister(state, action) {
            state.token = action.payload.token;
        },
        useLogin(state, action) {
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
