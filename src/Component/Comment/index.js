import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import commentApi from './../../Api/commentApi';

function CommentBox(props) {
    const { post } = props;;
    const [idComment, setIdComment] = useState([])
    const [allComment, setAllComment] = useState([])
    const [commentOfPost, setCommentOfPost] = useState([])
    const { listComment } = props;

    useEffect(() => {
        let arrIdComment = []
        const getIdComment = () => {
            if (listComment) {
                listComment.forEach((comment) => {
                    arrIdComment.push(comment._id)
                })
                setIdComment(arrIdComment);
            }
        }
        getIdComment()
    }, [listComment])

    useEffect(() => {
        const getCommentdetail = async () => {
            if (idComment) {
                let cmt = await commentApi.getAll()
                setAllComment(cmt)
            }
        }
        idComment && getCommentdetail()
    }, [idComment])

    useEffect(() => {
        let comment = allComment.filter(x => idComment.some(item => x._id === item))
        setCommentOfPost(comment)
    }, [idComment, allComment])

    return (
        <>
            <Comment
                post={post}
                listComment={listComment}
                commentOfPost={commentOfPost}
                setCommentOfPost={setCommentOfPost}
            />
        </>
    );
}

export default React.memo(CommentBox);