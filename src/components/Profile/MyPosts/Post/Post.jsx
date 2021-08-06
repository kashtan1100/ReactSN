import React from "react";
import s from './Post.module.css';

let Post = (props) => {
    return (
        <div className={s.item}>
            <img src={'https://avatars.mds.yandex.net/get-zen_doc/2414075/pub_5fe5b24763337471b9f21113_5fe5b682b590cf1d64c0d9f1/scale_1200'}
            alt={'description'}
            />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>);
}

export default Post;