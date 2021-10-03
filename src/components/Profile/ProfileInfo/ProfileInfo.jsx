import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preolader/preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


let ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>
                <img src={'https://img.youtube.com/vi/ukF__x-Xd0E/0.jpg'}
                     alt={'description'}
                />
            </div>*/}
            <div className={s.desBlock}>
                <img src={props.profile.photos.large}/>
                <p>{props.profile.lookingForAJobDescription}</p>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;