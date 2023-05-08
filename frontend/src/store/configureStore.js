import { configureStore } from "@reduxjs/toolkit";
import reducer from "./employee/employees";

const store = configureStore({ reducer });

export default store;
