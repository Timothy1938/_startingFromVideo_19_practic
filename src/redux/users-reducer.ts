const FOLLOW  = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}
export type FollowAT = {
    type: 'FOLLOW'
    id: any
}
export type UnfollowAT = {
    type: 'UNFOLLOW'
    id: any
}
export type SetUsersAT = {
    type: 'SET_USERS'
    users: any
}
export type setCurrentPageAT = {
    type: 'SET_CURRENT_PAGE',
    currentPage: any
}
export type setTotalUsersCountAT = {
    type: 'SET_TOTAL_USERS_COUNT',
    totalUsersCount: any
}
export type toggleIsFetchingAT = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching:boolean
}
export type AT = FollowAT | UnfollowAT | SetUsersAT | setCurrentPageAT | setTotalUsersCountAT | toggleIsFetchingAT

export const UsersReducer = (state:any = initialState, action:AT) => {

    switch (action.type) {
        case FOLLOW:{
            debugger
            return {...state, users: state.users.map((u:any) =>u.id === action.id ? {...u, followed: true} : u)}
        }
        case UNFOLLOW:{
            return {...state, users: state.users.map((u:any) =>u.id === action.id ? {...u, followed: false} : u)}
        }
        case SET_USERS:{
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default: return state
    }

}
export const follow = (id:any): FollowAT => {
    return {
        type: FOLLOW,
        id
    }}
export const unfollow = (id:any): UnfollowAT => {
    return {
        type: UNFOLLOW,
        id
    }}
export const setUsers = (users:any): SetUsersAT => {
  return {type: SET_USERS, users}
}
export const setCurrentPage = (currentPage:any):setCurrentPageAT => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage
    }

}
export const setTotalUsersCount = (totalUsersCount:any): setTotalUsersCountAT => {
  return {
      type: SET_TOTAL_USERS_COUNT,
      totalUsersCount
  }
}
export const toggleIsFetching = (isFetching:boolean): toggleIsFetchingAT => {
  return {
      type: TOGGLE_IS_FETCHING,
      isFetching
  }
}