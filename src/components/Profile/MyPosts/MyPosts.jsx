import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

let MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    let newPostElement = React.createRef();

    return (
        <div>
            <div className={s.postBlock}>
                <h3>My posts</h3>
                <AddNewMyPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>);
}

let AddNewMyPostForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'}/>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}

let AddNewMyPostFormRedux = reduxForm({form:'ProfileAddNewMyPostForm'})(AddNewMyPostForm);

export default MyPosts;