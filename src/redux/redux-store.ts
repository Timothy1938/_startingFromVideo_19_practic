import {combineReducers, createStore} from "redux";
import {ProfilePageReducer} from "./ProfilePageReducer";
import {MessagePageReducer} from "./MessagePageReducer";

const reducers = combineReducers({
    ProfilePage: ProfilePageReducer,
    MessagePage: MessagePageReducer
})
export const store = createStore(reducers)