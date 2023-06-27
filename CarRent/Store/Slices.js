import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name: "slice",
    initialState: {
        user: {},
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { addUser } = Slice.actions;
export default Slice.reducer;