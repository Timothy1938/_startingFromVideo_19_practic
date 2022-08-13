import {combineReducers, createStore} from "redux";
import {ProfilePageReducer} from "./ProfilePageReducer";
import {MessagesPageReducer} from "./MessagesPageReducer";

const reducers = combineReducers({
    ProfilePage: ProfilePageReducer,
    MessagesPage: MessagesPageReducer
})
export const store = createStore(reducers)

