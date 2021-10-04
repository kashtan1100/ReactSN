import React from "react";

import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo(props => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    //let newPostElement = React.createRef();

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
});

const maxLength10 = maxLengthCreator(10);

let AddNewMyPostForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder={'Post message'}
                       name={'newPostText'}
                       validate={[required, maxLength10,]}/>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}

let AddNewMyPostFormRedux = reduxForm({form:'ProfileAddNewMyPostForm'})(AddNewMyPostForm);

export default MyPosts;