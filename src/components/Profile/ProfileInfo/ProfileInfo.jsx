import React from "react";
import s from './ProfileInfo.module.css';


let ProfileInfo = () => {
    return (
        <div>
            <img src={'https://img.youtube.com/vi/ukF__x-Xd0E/0.jpg'}
            alt={'description'}
            />
            <div className={s.desBlock}>
                avatar + des
            </div>
        </div>
    );
}

export default ProfileInfo;