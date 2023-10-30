import { type } from "os";
import { apiSlice } from "../Api/ApiSlice";
import { useRegister } from "./authSlice";

type RegisterResponse = {
    message: string;
    activationToken: string;
};

type RegisterData = {
    // email: string;
    // password: string;
    // username: string;

}

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<RegisterResponse, RegisterData>({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data,
                credentials: 'include' as const
            }),
            async onQueryStarted(data, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(useRegister({
                        token: result.data.activationToken,
                    }));
                } catch (error) {
                    console.log(error);
                }
            }
        }),
        activate: builder.mutation({
            query: ({ activate_token, activate_code}) => ({
                url: '/auth/activate-account',
                method: 'POST',
                body: {
                    activate_token,
                    activate_code
                },
                credentials: 'include' as const
            }),
        }),
        
    }),
})

export const { useRegisterMutation,useActivateMutation } = authApi;