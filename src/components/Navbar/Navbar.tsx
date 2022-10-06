import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return(
    <div className={s.navClass}>
  <div><NavLink to={'/profile'} className={({isActive})=>isActive ? s.isActive : s.isNoActive}>Profile</NavLink></div>
    <div><NavLink to={'/dialogs'} className={({isActive})=>isActive ? s.isActive : s.isNoActive}>Messages</NavLink></div>
      <div><NavLink to={'/users'} className={({isActive})=>isActive ? s.isActive : s.isNoActive}>Users</NavLink></div>
    <div><NavLink to={'/news'} className={({isActive})=>isActive ? s.isActive : s.isNoActive}>News</NavLink></div>
    <div><NavLink to={'/music'} className={({isActive})=>isActive ? s.isActive : s.isNoActive}>Music</NavLink></div>
    <div><NavLink to={'/settings'} className={({isActive})=>isActive ? s.isActive : s.isNoActive}>Settings</NavLink></div>
    </div>)
}