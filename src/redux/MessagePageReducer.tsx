import {v1} from "uuid";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {
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


export const MessagePageReducer = (state: any = initialState, action:any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text
            return state
        case ADD_MESSAGE:
            debugger
            let newMessage = {id: v1(), message: state.newMessageText}
            state.MessagesData.push(newMessage)
            state.newMessageText = ''
            return state
    }

    return state
}

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