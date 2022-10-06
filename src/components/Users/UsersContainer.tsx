import React from "react";
import {connect} from "react-redux";
//import Users from "./UsersAPIComponent";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import loadingImage from '../../asserts/images/Rocket.gif'
import s from './users.module.css'
import {Preloader} from "../common/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component<any, any>{
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data: any) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }
    onPageChanged = (pageNumber:any) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then((data: any) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)

        })
    }
    render() {

        //console.log(pages)

        return <div>
            {this.props.isFetching ? <Preloader/> : ''}
        <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            usersCount={this.props.usersCount}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}
            loadingImage={loadingImage}
        />
        </div>

    }
}

export const mapStateToProps = (state: any) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        usersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching
    }
}
/*export const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: any) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: any) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage:any)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (usersCount:any)=>{
            dispatch(setTotalUsersCountAC(usersCount))
        },
        toggleIsFetching: (isFetching:boolean)=>{
            dispatch(toggleIsFetchingAC(isFetching))
        }

    }
}*/

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer)