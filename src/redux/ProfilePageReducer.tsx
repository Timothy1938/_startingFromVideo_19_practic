const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    PostsData: [
        {id: 0, message: 'Hello, how are you?', likes: 0},
        {id: 1, message: "It's my first post", likes: 10}
    ],
    newPostText: "IT-KAMASUTRA",
    profile: null

}
type setUserProfileAT = {
    type: 'SET_USER_PROFILE',
    profile: any
}

    export const ProfilePageReducer = (state:any = initialState, action:any) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                PostsData: [...state.PostsData, {id: 5, message: state.newPostText, likes: 0}]
            }

        }
        case UPDATE_NEW_POST_TEXT: {

            return {
                ...state,
                newPostText: action.newPostText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default: return state
    }

}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }}
export const updateNewPostTextActionCreator = (props:any) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: props
    }}
export const setUserProfile = (profile:any): setUserProfileAT => {
    return {
        type: SET_USER_PROFILE,
        profile
    }}