import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employee/employees";
import taskReducer from "./task/tasks";
import logger from "redux-logger";
import error from "../middleware/error";

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger, error],
});

export default store;
