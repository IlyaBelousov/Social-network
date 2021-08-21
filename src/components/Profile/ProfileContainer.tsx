import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';


export class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response=>{
                console.log(response.data);
            })
    }

    render() {
        return <Profile {...this.props}/>
    }
}

