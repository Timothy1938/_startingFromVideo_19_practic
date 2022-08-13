import s from './Messages.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/MessagesPageReducer";



export const Messages = (props: any) => {
    //let TextareaReference = React.createRef()


    return (
        <div className={s.main}>
        <div className={s.a}>
            {props.DialogsData.map((el:any)=><DialogItem id={el.id} name={el.name}/>)}
        </div>
        <div className={s.b}>
            {props.MessagesData.map((el:any)=><Message message={el.message}/>)}
            <div className={s.Textarea}>
            <textarea onChange={(event)=>props.OnChangeTextMessage(event.currentTarget.value)} value={props.newMessageText}/>
            <div><button onClick={props.addMessage}>Send</button></div>
            </div>
        </div>
    </div>
    )
    /*return <div className={s.messages}>

        <div><NavLink to={'/dialogs/1'}>Dimych</NavLink></div>
        <div><NavLink to={'/dialogs/2'}>Andrey</NavLink></div>
        <div><NavLink to={'/dialogs/3'}>Sveta</NavLink></div>
        <div><NavLink to={'/dialogs/4'}>Sasha</NavLink></div>
        <div><NavLink to={'/dialogs/5'}>Viktor</NavLink></div>
        <div><NavLink to={'/dialogs/6'}>Valera</NavLink></div>
    </div>*/
}

/*<DialogItem id={'3'} name={'Sveta'}/>
<DialogItem id={'4'} name={'Sasha'}/>
<DialogItem id={'5'} name={'Viktor'}/>
<DialogItem id={'6'} name={'Valera'}/>*/

