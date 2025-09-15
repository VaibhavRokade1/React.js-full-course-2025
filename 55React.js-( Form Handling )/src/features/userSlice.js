import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, actions) => {
      const newUser = {
        id: nanoid(),
        name: actions.payload.fullName,
        email: actions.payload.email,
        phone: actions.payload.phone,
        role: actions.payload.role,
      };
      state.users.push(newUser);
    },
    updateUser: (state, actions) => {
      const user = state.users.find((user) => user.id === actions.payload.id);
      user.name = actions.payload.name;
      user.email = actions.payload.email;
      user.phone = actions.payload.phone;
      user.role = actions.payload.role;
    },

    removeUser: (state, actions) => {
      state.users = state.users.filter((user) => user.id !== actions.payload);
    },
  },
});

export const { addUser, removeUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
