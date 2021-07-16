import {StoreContext} from '../../../StoreContext';
import {AddNewPostActionCreator, ChangeNewPostTextActionCreator} from '../../../redux/redux-store';
import AddPost from './AddPost';
import s from '../Profile.module.css';
import Post from './Post';
import React from 'react';

type PostMessageType = {
    id: number
    username: string
    message: string
}
export const PostWrapper = () => {

    return <StoreContext.Consumer>{
        (store) => {
            const AddPostChangeHandler = (text: string) => {
                store.dispatch(ChangeNewPostTextActionCreator(text));
            };
            const CreatePostHandler = () => {
                store.dispatch(AddNewPostActionCreator());
            };
            return <div>
                <AddPost
                    createPost={CreatePostHandler}
                    updateNewPostText={AddPostChangeHandler}
                    newPostText={store.getState().profilePage.posts.newPostText}/>
                <div className={s.usersPosts}>
                    {
                        store.getState().profilePage.posts.post.map((p: PostMessageType) =>
                            <Post username={p.username}
                                  id={p.id}
                                  message={p.message}/>)
                    }
                </div>
            </div>;
        }

    }
    </StoreContext.Consumer>;
};
