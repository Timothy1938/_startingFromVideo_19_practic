import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";

import {setUserProfile} from "../../redux/ProfilePageReducer";
import {useParams} from "react-router-dom";


class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        debugger
        let userID = this.props.param.userId
        if(!userID){
            userID = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID).then((response: any) => {
            console.log(response.data)
            this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>;
    }
}

export const mapStateToProps = (state:any) => {
  return {
      profile: state.ProfilePage.profile
  }
}
const TakeParams = (props:any) => {
    return <ProfileContainer {...props} param={useParams()} />
}
export default connect(mapStateToProps, {setUserProfile})(TakeParams)


