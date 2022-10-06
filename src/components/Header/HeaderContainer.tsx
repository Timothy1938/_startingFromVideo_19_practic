import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {toggleIsFetching} from "../../redux/users-reducer";
import preloaderImage from '../../asserts/images/Rocket.gif'
import {setAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then((response: any) => {

            this.props.toggleIsFetching(false)
            this.props.setAuthUserData(response.data.data)

        })
    }

    render() {
        if(this.props.isFetching){
            return <div>
                <img src={preloaderImage}/>
            </div>
        }
        return <Header {...this.props} />;
    }
}
const mapStateToProps = (state:any) => {
  return {
      isFetching: state.auth.isFetching,
      isAuth: state.auth.isAuth,
      login: state.auth.login
  }
}
export default connect(mapStateToProps, {toggleIsFetching, setAuthUserData})(HeaderContainer)