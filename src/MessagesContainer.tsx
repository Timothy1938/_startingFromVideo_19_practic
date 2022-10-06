
import {Messages} from "./components/Messages/Messages";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "./redux/MessagesPageReducer";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";

/*export const MessagesContainer = () => {

  return <StoreContext.Consumer>{
      (store:any)=> {
        const OnChangeTextMessage =(text: string)=>{

          store.dispatch( updateNewMessageTextActionCreator(text))}
        const addMessage = () => {

          store.dispatch(addMessageActionCreator())
        }

        return <Messages DialogsData={store.getState().MessagesPage.DialogsData}
                         MessagesData={store.getState().MessagesPage.MessagesData}
                         newMessageText={store.getState().MessagesPage.newMessageText}
                         OnChangeTextMessage={OnChangeTextMessage}
                         addMessage={addMessage}
        />
      }
  }</StoreContext.Consumer>
}*/
const mapStateToProps = (state:any) => {
  return {
  DialogsData:state.MessagesPage.DialogsData,
  MessagesData:state.MessagesPage.MessagesData,
  newMessageText:state.MessagesPage.newMessageText
}}
const mapDispatchToProps= (dispatch:any) => {
  return {
    OnChangeTextMessage:(text:string)=>{
      dispatch( updateNewMessageTextActionCreator(text))
    },
    addMessage:()=>{
      dispatch(addMessageActionCreator())
    }
  }
}
const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages)
export default MessagesContainer

