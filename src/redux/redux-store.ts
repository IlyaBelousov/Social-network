import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
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
import {reducer as formReducer} from 'redux-form';
import {AuthActionsType, authReducer} from "./auth-reducer";

export type ActionsType = ProfileActionType
    | DialogsActionType
    | UsersActionType
    | AuthActionsType


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


let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    form: formReducer
});
export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppStateType,
    unknown,
    ActionsType>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


