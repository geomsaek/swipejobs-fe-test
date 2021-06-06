import * as React from 'react';
import "./profileViewController.scss";
import { useSelector } from 'react-redux';
import { getUserProfile } from "../../store/selectors";
import { BgImg } from "../../components/bgImg/bgImg";

// shows the profile details for the current user
export const ProfileViewController: React.FC = () => {
    
    const profile = useSelector(getUserProfile);

    return <div className="component-wrapper">
        <div className="component-wrapper__inner">

            {profile != null ? <div className="profile-view-controller">
                <div className="profile-view-controller__left">
                    <div className="profile-view-controller__profile">
                        <BgImg src={"../assets/images/profile.jpg"} title={`${profile.firstName} - profile picture`} />
                    </div>
                </div>
                <div className="profile-view-controller__right">
                    <h1>Member information</h1>
                    <p><strong>First Name: </strong> {`${profile.firstName}`}</p>
                    <p><strong>Last Name: </strong> {`${profile.lastName}`}</p>
                    <p><strong>Address: </strong> {`${profile.address.formattedAddress}`}</p>
                    <p><strong>Zone ID: </strong> {`${profile.address.zoneId}`}</p>
                    <p><strong>Email: </strong> {`${profile.email}`}</p>
                    <p><strong>Phone: </strong> {`${profile.phoneNumber}`}</p>

                    <div className="profile-view-controller__cta">
                        <a className="btn" href="/jobs">View my job listings</a>
                    </div>
                </div>
            </div> : null}
        </div>
    </div>

}