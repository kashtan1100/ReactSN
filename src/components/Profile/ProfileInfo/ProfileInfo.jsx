import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preolader/preloader";


let ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <img src={'https://img.youtube.com/vi/ukF__x-Xd0E/0.jpg'}
            alt={'description'}
            />
            <div className={s.desBlock}>
                <img src={props.profile.photos.large}/>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    );
}

export default ProfileInfo;