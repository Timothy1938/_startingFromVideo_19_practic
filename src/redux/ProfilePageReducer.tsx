const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    PostsData: [
        {id: 0, message: 'Hello, how are you?', likes: 0},
        {id: 1, message: "It's my first post", likes: 10}
    ],
    newPostText: "IT-KAMASUTRA"
}

export const ProfilePageReducer = (state:any = initialState, action:any) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 5, message: state.newPostText, likes: 0}
            state.PostsData.push(newPost)
            state.newPostText = ''


            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText
            return state
    }
    return state
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