import React from "react";
import s from './Post.module.css';

let Post = (props) => {
    return (
        <div className={s.item}>
            <img src={'https://million-wallpapers.ru/wallpapers/5/51/497634337058431/nejtiri-avatar-film-1.jpg'}
            alt={'description'}
            />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>);
}

export default Post;