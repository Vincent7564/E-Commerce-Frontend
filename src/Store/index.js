import { createStoreHook } from "react-redux";
import rootReducer from './Reducers';

const store = createStoreHook(rootReducer);

export default store;