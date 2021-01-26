/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PostDetail from './PostDetail';
import postApi from './../../Api/postApi';

function Detail(props) {
    const [post, setPost] = useState({})
    const postId = props.match.params.postId;

    useEffect(() => {
        const getPost = async () => {
            const postDetail = await postApi.getPostById(postId)
            setPost(postDetail);
        }
        postId && getPost()
    }, [])

    return (
        <>
            {post && <PostDetail post={post} />}
        </>
    );
}

export default Detail;