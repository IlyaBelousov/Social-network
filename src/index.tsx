import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type DialogItemType={
    id:number
    username: string
    message:string
}
export type DialogType = {
    DialogsData:Array<DialogItemType>
}
export type ProfilePropsType = {
    posts: PostsType
}
export type PostsType={
    post:Array<messageType>
}
export type messageType = {
    id: number
    message: string
}
export type stateType={
    profile:ProfilePropsType
    dialog:DialogType

}
export type StateRootType ={
    state:stateType
}

let stateRoot:StateRootType = {
    state: {
        profile: {
            posts: {
                post: [
                    {id: 1, message: 'Hey! How are you?'},
                    {id: 2, message: 'Hey! How are you?'},
                    {id: 3, message: 'Hey! How are you?'}
                ]
            }
            },
        dialog: {
            DialogsData: [
                {id: 1, username: 'Liza', message: 'Hey'},
                {id: 2, username: 'Denchik', message: 'Hey'},
                {id: 3, username: 'Leo', message: 'Hey'},
                {id: 4, username: 'Brodiyagi', message: 'Hey'}
            ]}
    }
}
export default stateRoot;


ReactDOM.render(
  <React.StrictMode>
    <App state={stateRoot.state} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
