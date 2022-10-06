
import {combineReducers, createStore} from "redux";
import {ProfilePageReducer} from "./ProfilePageReducer";
import {MessagesPageReducer} from "./MessagesPageReducer";
import {UsersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

const reducers = combineReducers({
    ProfilePage: ProfilePageReducer,
    MessagesPage: MessagesPageReducer,
    UsersPage: UsersReducer,
    auth: authReducer
})
export const store = createStore(reducers)
// @ts-ignore
window.store = store


