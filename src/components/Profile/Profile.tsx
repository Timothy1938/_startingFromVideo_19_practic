import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "../../MyPostsContainer";

export const Profile = (props:any) => {
    return(
  <div className={s.contentClass}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
  </div>)
}