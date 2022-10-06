const FOLLOW  = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false
}
export type FollowAT = {
    type: 'FOLLOW'
    id: any
}
export type UnfollowAT = {
    type: 'UNFOLLOW'
    id: any
}

export type toggleIsFetchingAT = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching:boolean
}
export type setUserDataAT = {
    type: 'SET_USER_DATA',
    data: any
}
export type dataType = {
    id: number,
    email: string,
    login: string,
}
export type AT = FollowAT | UnfollowAT | toggleIsFetchingAT | setUserDataAT

export const authReducer = (state:any = initialState, action:AT) => {

    switch (action.type) {
        case FOLLOW:{
            return {...state, users: state.users.map((u:any) =>u.id === action.id ? {...u, followed: true} : u)}
        }
        case UNFOLLOW:{
            return {...state, users: state.users.map((u:any) =>u.id === action.id ? {...u, followed: false} : u)}
        }

        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
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

export const setAuthUserData = (data:dataType): setUserDataAT => {
  return {
      type: SET_USER_DATA,
      data
  }
}


