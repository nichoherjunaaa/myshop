import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        name: 'nicho',
        email: 'nicho@gmail.com',
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            // Update state dengan payload yang diterima
            state.user = action.payload;
        }
    }
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;