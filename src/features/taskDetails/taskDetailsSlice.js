import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskDetails: [
    {
      id: 1,
      title: "Employee Personal Module",
      time: "03:15:45",
      description: "Completed Employee Adding And Updating Section",
    },
    {
      id: 2,
      title: "Salary Module",
      time: "05:34:45",
      description: "Completed Salary Module ",
    },
    {
      id: 3,
      title: "Cash Flow Management",
      time: "04:45:45",
      description: "Completed Cash Flow and Its Related Sections",
    },
  ],
};
const taskDetailsSlice = createSlice({
  name: "taskDetail",
  initialState,
  reducers: {
    addTaskDetails: (state, { payload }) => {
      state.taskDetails.push(payload);
    },

    updateTaskDetails: (state, { payload }) => {
      state.taskDetails[parseInt(payload.index)].title = payload.title;
      state.taskDetails[parseInt(payload.index)].description =
        payload.description;
    },

    deleteTask: (state, { payload }) => {
      state.taskDetails = state.taskDetails.filter(
        (val, index) => index !== parseInt(payload)
      );
    },
  },
});

export const { addTaskDetails, deleteTask,updateTaskDetails } = taskDetailsSlice.actions;
export default taskDetailsSlice.reducer;
