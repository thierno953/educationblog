import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./features/BlogSlice";
import InstructSlice from "./features/InstructSlice";


export default configureStore({
  reducer: {
    blog: blogSlice,
    instruct: InstructSlice
  },
});
 