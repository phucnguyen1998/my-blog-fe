import React, { useState } from 'react';
import FormComment from './FormComment';
import * as Fc from './../../../utils/Function';
import { useDispatch } from "react-redux";
import { addComment } from "./../../../page/ListPost/postSlice";
import { unwrapResult } from '@reduxjs/toolkit';

function Form(props) {
    const { post, setCommentOfPost, commentOfPost } = props;
    const dispatch = useDispatch();
    const [comment, setComment] = useState('')
    const userLogin = Fc.getUserLogin();
    const user = JSON.parse(userLogin);
    let listCmt = [...commentOfPost]
    const date = new Date();

    const handleSubmit = async (user) => {
        if (comment !== '') {
            const body = {
                "Message": comment,
                "post": post,
                "users_permissions_user": user
            }
            const action = addComment(body)
            const resultAction = await dispatch(action)

            let newComment = {
                "Message": comment,
                "post": post,
                "users_permissions_user": user,
                "createdAt": date.toISOString(),
            }

            listCmt.unshift(newComment)
            setCommentOfPost(listCmt)
            unwrapResult(resultAction)
            setComment('')
        }
    }
    return (
        <>
            <FormComment
                user={user}
                comment={comment}
                handleSubmit={handleSubmit}
                setComment={setComment}
            />
        </>
    );
}

export default React.memo(Form);