/* eslint-disable react-hooks/exhaustive-deps */
import { unwrapResult } from '@reduxjs/toolkit';
import Post from './Post';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost } from './postSlice';


function ListPost(props) {
    const dispatch = useDispatch()
    const listPost = useSelector(state => state.post.current);

    useEffect(() => {
        const getAll = async () => {
            const action = getAllPost()
            const resultAction = await dispatch(action)
            unwrapResult(resultAction)
        }
        getAll()
    }, [])

    return (
        <>
            {listPost && <Post listPost={listPost} />}
        </>
    );
}

export default ListPost;