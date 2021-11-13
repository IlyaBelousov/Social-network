import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
    AddNewPost,
    ChangeNewPostTextActionCreator,
    ProfileReducer,
    SetUserProfileActionCreator, SetUserStatus, UpdateUserStatus
} from './profile-reducer';
import {DialogsReducer, SendMessageActionCreator} from './dialogs-reducer';
import {
    FollowActionCreator, SetFollowInProgress,
    SetCurrentPage,
    SetToggleIsFetching, SetTotalUsersCount, SetUsers,
    UsersReducer, UnFollowActionCreator,
} from './users-reducer';
import {AuthReducer, LogInAC, SetAuthData} from './auth-reducer';
import {reducer as formReducer} from 'redux-form';

export type ActionsType = ProfileActionType
    | DialogsActionType
    | UsersActionType
    | AuthActionType

export type ProfileActionType =
    ReturnType<typeof AddNewPost>
    | ReturnType<typeof ChangeNewPostTextActionCreator>
    | ReturnType<typeof SetUserProfileActionCreator>
export type DialogsActionType =
    ReturnType<typeof SendMessageActionCreator>
    | ReturnType<typeof SetUserStatus>
    | ReturnType<typeof UpdateUserStatus>


export type UsersActionType =
    ReturnType<typeof FollowActionCreator>
    | ReturnType<typeof SetUsers>
    | ReturnType<typeof SetCurrentPage>
    | ReturnType<typeof SetTotalUsersCount>
    | ReturnType<typeof SetToggleIsFetching>
    | ReturnType<typeof UnFollowActionCreator>
    | ReturnType<typeof SetFollowInProgress>

export type AuthActionType = ReturnType<typeof SetAuthData>|ReturnType<typeof LogInAC>

let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer
});
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


