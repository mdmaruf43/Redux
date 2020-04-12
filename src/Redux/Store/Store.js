import { createStore } from "redux";
import { cartReducers } from "../Reducers/CartReducers";

export const store = createStore(cartReducers);