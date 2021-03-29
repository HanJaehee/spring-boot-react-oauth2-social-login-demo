import React, { Component } from 'react';
import { updateUserInfo, getCurrentUser } from '../../util/APIUtils';
import './Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                        <div className="profile-avatar">
                            { 
                                this.props.currentUser.imageUrl ? (
                                    <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                    </div>
                                )
                            }
                        </div>
                        <button onClick={()=>{
                            const token = localStorage.getItem("accessToken");
                            console.log(token);
                            }}>토큰 출력</button>
                        <button onClick={()=>{
                            getCurrentUser().then((res)=>{
                                console.log(res);
                            })
                            console.log(this.props.currentUser);
                        }}>userme 호출</button>
                        <button onClick={()=>{
                            updateUserInfo().then((res)=>{
                                console.log(res);
                                // this.setState({
                                //     currentUser: res
                                // })
                            }).catch((err)=>{
                                console.log(err);
                            })
                        }}>updateUserInfo 호출</button>
                        <div className="profile-name">
                           <h2>{this.props.currentUser.name}</h2>
                           <p className="profile-email">{this.props.currentUser.email}</p>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Profile