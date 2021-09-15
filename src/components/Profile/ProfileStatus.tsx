import React, {ChangeEvent} from 'react';
import s from './Profile.module.css';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component <ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e) {
            this.setState({
                status: e.currentTarget.value
            });
        }

    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };
    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {
        if(prevProps.status!==this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        console.log(this.state.status);
        return <div>
            <div onBlur={this.deActivateEditMode} onDoubleClick={this.activateEditMode}>
                {
                    this.state.editMode
                        ? <input onChange={this.onStatusChange} className={s.status} autoFocus={true}
                                 value={this.state.status}/>
                        : <span>{this.props.status}</span>
                }
            </div>

        </div>;

    }
}

