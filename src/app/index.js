import { configureStore } from "@reduxjs/toolkit";
import { bookService } from "./services/bookService";
const Store = configureStore({
  reducer: {
    [bookService.reducerPath]: bookService.reducer,
  },
});

export default Store;
