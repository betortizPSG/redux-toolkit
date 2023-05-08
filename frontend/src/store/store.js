import { configureStore } from "@reduxjs/toolkit";
import reducer from "./task/reducer";

const store = configureStore({reducer});

export default store;
