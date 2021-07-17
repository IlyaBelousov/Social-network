import {ActionsType} from './redux-store';

const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
export type UserStateType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: { country: string, city: string }
}
type UsersInitialStateType = {
    users: Array<UserStateType>
}
let UsersInitialState: UsersInitialStateType = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Liza',
            status: 'Hey, there!',
            location: {country: 'Russia', city: 'Saint-Petersburg'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Denchik',
            status: 'Hey, there!',
            location: {country: 'Russia', city: 'Moscow'}
        },
        {
            id: 3,
            followed: true,
            fullName: 'Leo',
            status: 'Hey, there!',
            location: {country: 'Russia', city: 'Syctivkar'}
        }
    ]
};

export const UsersReduser = (state = UsersInitialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {
                            ...u,
                            followed: !u.followed
                        };
                    }
                    return u;
                })
            };

        }

        case SET_USERS: {
            return {...state, users: {...state.users, ...action.users}};
        }
        default:
            return state;
    }
};

export const FollowAC = (userID: number) => {
    return {type: FOLLOW, userID} as const;
};

export const SetUsersAC = (users: Array<UserStateType>) => {
    return {type: SET_USERS, users} as const;
};