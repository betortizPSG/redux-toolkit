import { configureStore } from "@reduxjs/toolkit";
import employee from "./employee/employees";
import task from "./task/tasks";

const store = configureStore({ reducer: employee, task });

export default store;
