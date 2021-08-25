import {combineReducers, createStore} from 'redux';
import {
    AddNewPostActionCreator,
    ChangeNewPostTextActionCreator,
    ProfileReducer,
    SetUserProfileActionCreator
} from './profile-reducer';
import {ChangeMessageTextActionType, DialogsReducer, SendMessageActionCreator} from './dialogs-reducer';
import {
    FollowAC,
    SetCurrentPageAC,
    SetIsFetchingAC,
    SetTotalUsersCountAC,
    SetUsersAC, UnFollowAC,
    UsersReducer
} from './users-reducer';

let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer
});
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);

export type ActionsType = ProfileActionType | DialogsActionType | UsersActionType
export type ProfileActionType =
    ReturnType<typeof AddNewPostActionCreator>
    | ReturnType<typeof ChangeNewPostTextActionCreator>
    | ReturnType<typeof SetUserProfileActionCreator>
export type DialogsActionType =
    ReturnType<typeof SendMessageActionCreator>
    | ReturnType<typeof ChangeMessageTextActionType>


export type UsersActionType =
    ReturnType<typeof FollowAC>
    | ReturnType<typeof SetUsersAC>
    | ReturnType<typeof SetCurrentPageAC>
    | ReturnType<typeof SetTotalUsersCountAC>
    | ReturnType<typeof SetIsFetchingAC>
    | ReturnType<typeof UnFollowAC>

