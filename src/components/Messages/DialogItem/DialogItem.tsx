import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    name: string
}
export const DialogItem = (props: PropsType) => {
    let path = '/dialogs/' + props.id
    return <div><NavLink to={path}>{props.name}</NavLink></div>
}