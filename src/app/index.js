import { configureStore } from "@reduxjs/toolkit";
import { bookServices } from "./services/bookService";
const Store = configureStore({
  reducer: {
    [bookServices.reducerPath]: bookServices.reducer,
  },
});

export default Store;
