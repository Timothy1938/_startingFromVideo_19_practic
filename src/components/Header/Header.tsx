import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = (props:any) => {
    return(
  <div className={s.hedrClass}>
      <img src={'https://free-images.com/or/d3fc/vanamo_logo_svg.jpg'} alt={''}/>
      <div className={s.loginBlock}>
          {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
  </div>)
}