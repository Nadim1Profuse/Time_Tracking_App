import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskDetails: [
    {
      id: 1,
      title: "array problem",
      time: "00:15:45",
      description: "solved 2 array problem",
    },
    {
      id: 2,
      title: "Arrow Function",
      time: "00:34:45",
      description: "solved 2 array function problem",
    },
    {
      id: 3,
      title: "Generator Function",
      time: "00:45:45",
      description: "Studied Generator Function",
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
