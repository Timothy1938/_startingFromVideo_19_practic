import React from "react";
import s from './users.module.css'
import userPhoto from '../../asserts/images/avatarImage.png'
import {NavLink} from "react-router-dom";
import axios from "axios";

export const Users = (props:any) => {
    let pagesCount = Math.ceil(props.usersCount / props.pageSize)
   // console.log(`${pagesCount} = ${props.totalUsersCount} / ${props.pageSize}`)

    let pages = []
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }
  return <div>
      <div>
          {
              pages.map((p:any) => {
                  return <span className={p === props.currentPage? s.selectedPage : ''} onClick={(e)=>props.onPageChanged(p)}>{p}</span>
              })
          }
      </div>
      {
          props.users.map((u: any) => <div key={u.id}>
              <span>
                  <div>
                      <NavLink to={'/profile/' + u.id}>
                      <img src={
                          u.photos.small != null
                              ?
                              u.photos.small
                              :
                              userPhoto
                      }
                           className={s.userPhoto}
                      />
                          </NavLink>
                  </div>
                  <div>
                    {
                        u.followed
                            ?
                            <button onClick={() => {
                                debugger
                                axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + u.id, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'ad22a6a2-a580-4182-9dc6-e66a52029848'
                                    }
                                })
                                    .then((response)=>{
                                        debugger
                                       if(response.data.resultCode == 0){
                                           props.unfollow(u.id)
                                       }
                                    })
                            }}>unfollow</button>
                            :
                            <button onClick={() => {
                                axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + u.id, {},{
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'ad22a6a2-a580-4182-9dc6-e66a52029848'
                                    }
                                })
                                    .then((response)=>{
                                        debugger
                                    if(response.data.resultCode == 0){
                                        debugger
                                        props.follow(u.id)
                                    }
                                })

                            }}>follow</button>}
                      {/*<button onClick={u.followed ? ()=>props.unfollow(u.id) : ()=>props.follow(u.id)}>{u.followed}</button>*/}
                  </div>
              </span>
                  <span>
                  <span>
                      <div>
                          {u.name}
                      </div>
                      <div>
                          {u.status}
                      </div>
                  </span>
                  <span>
                      <div>
                          {"u.location.country"}
                      </div>
                      <div>
                          {"u.location.city"}
                      </div>
                  </span>
              </span>
              </div>
          )
      }
  </div>
}