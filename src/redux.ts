export let a = 'x'



/*import {v1} from "uuid";
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'
const SUBSCRIBE = 'SUBSCRIBE'

export const addPostActionCreator = () => {
    return {
  type: ADD_POST
}}
export const updateNewPostTextActionCreator = (props:any) => {
    return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: props
}}
export const updateNewMessageTextActionCreator = (props:any) => {
    debugger
    return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: props
}}
export const addMessageActionCreator = () => {
    return {
    type: ADD_MESSAGE
}}
export const subscribeActionCreator = () => {
    return {
    type: SUBSCRIBE
}}

let _callSubscriber:any

export const store: any = {
    _state:{
        ProfilePage: {
            PostsData: [
                {id: 0, message: 'Hello, how are you?', likes: 0},
                {id: 1, message: "It's my first post", likes: 10}
            ],
            newPostText: "IT-KAMASUTRA"
        },
        MessagesPage: {
            MessagesData: [
                {id: "a", message: 'Message A'},
                {id: 2, message: 'Message B'},
                {id: 3, message: 'Message C'},
                {id: 4, message: 'Message D'},
                {id: 5, message: 'Message E'},
                {id: 6, message: 'Message F'}
            ],
            newMessageText: "",
            DialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}

            ]
        }
    },
    getState(){
        return this._state
    },
    subscribe(observer:(state:any)=>void) {
        _callSubscriber = observer
    },
    dispatch(action:any){
        switch (action.type){
            case ADD_POST:
                debugger
                const newPost = {id: 5, message: this._state.ProfilePage.newPostText, likes: 0}
                this._state.ProfilePage.PostsData.push(newPost)
                this._state.ProfilePage.newPostText = ''
                _callSubscriber(this._state)
            break;
            case UPDATE_NEW_POST_TEXT:
                debugger
                this._state.ProfilePage.newPostText = action.newPostText
                _callSubscriber(this._state)
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                debugger
                this._state.MessagesPage.newMessageText = action.text
                _callSubscriber(this._state)
                break;
            case ADD_MESSAGE:
                debugger
                let newMessage = {id: v1(), message: this._state.MessagesPage.newMessageText}
                this._state.MessagesPage.MessagesData.push(newMessage)
                this._state.MessagesPage.newMessageText = ''
                _callSubscriber(this._state)
                break;
            case SUBSCRIBE:
                _callSubscriber = action.observer
                break
            default: return 'x'
        }
    }
}*/

