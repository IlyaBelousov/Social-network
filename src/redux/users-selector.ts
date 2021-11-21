import {AppStateType} from "./redux-store";

export const usersSelector = {
    getUsers(state: AppStateType) {
        return state.usersPage.items
    },
    getPageSize(state: AppStateType) {
        return state.usersPage.pageSize
    },
    getTotalCount(state: AppStateType) {
        return state.usersPage.totalCount
    },
    getCurrentPage(state: AppStateType) {
        return state.usersPage.currentPage
    },
    getIsFetching(state: AppStateType) {
        return state.usersPage.isFetching
    },
    getFollowInProgress(state: AppStateType) {
        return state.usersPage.followInProgress
    }

}