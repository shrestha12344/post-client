import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
import profileReducer from "./profileReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    profile: profileReducer,
    comment: commentReducer
});

export default rootReducer;
