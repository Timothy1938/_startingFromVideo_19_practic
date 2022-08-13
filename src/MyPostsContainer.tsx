import {Profile} from "./components/Profile/Profile";
import {MyPosts} from "./components/Profile/MyPosts/MyPosts";

import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "./redux/ProfilePageReducer";

/*export const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {(store:any)=>{
            let onPostChange=(value: string)=> {
                store.dispatch(updateNewPostTextActionCreator(value))
                //setText(value)}
            }
        return <MyPosts PostsData={store.ProfilePage.PostsData}
        newPostText={store.ProfilePage.newPostText}
                        onPostChange={onPostChange}/>}}
    </StoreContext.Consumer>
}*/

const mapStoreToProps = (state:any) => {
  return {
      PostsData: state.ProfilePage.PostsData,
      newPostText: state.ProfilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch:any) => {
  return {
      onPostChange:(value:string)=>{
          dispatch(updateNewPostTextActionCreator(value))
      },
      addPost:()=>{
          dispatch(addPostActionCreator())
      }
  }
}
const MyPostsContainer = connect(mapStoreToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer