import  s from './ProfileInfo.module.css'
//import {Componenta} from "./Componenta";
import {Preloader} from "../../common/Preloader";

export const ProfileInfo = (props:any) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (

        <div>

            <div>
                <img
                src={props.profile.photos.large}
                alt={''}/></div>
            <div className={s.a}>
                <div>{props.profile.aboutMe}</div>
                <div>lookingForAJob: {props.profile.lookingForAJob}</div>
                <div>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</div>
                <div>fullName: {props.profile.fullName}</div>
            </div>
        </div>)
}
//'https://get.wallhere.com/photo/1920x1281-px-landscape-mountains-nature-reflection-river-sunset-1717859.jpg'