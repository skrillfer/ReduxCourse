import { createSlice } from '@reduxjs/toolkit';
let id = 0;
const employeeSlice = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {
    // action: function
    addEmployee: (state, action) => {
      state.push({
        id: ++id,
        name: action.payload.employee,
      });
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
