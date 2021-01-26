import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import FormComment from './FormComment';
import moment from 'moment'

function CommentGroup(props) {
    const { commentOfPost, setCommentOfPost, post } = props
    const loggedUser = useSelector(state => state.user.current);
    const isLogin = !!loggedUser.id;

    return (
        <>
            <div onContextMenu={() => { return false }} className='snippet-body'>
                <div className="container mt-5 mb-5">
                    <div className="d-flex justify-content-center row">
                        <div className="d-flex flex-column col-md-8">
                            <div className="coment-bottom bg-white p-2 px-4">
                                {isLogin ? <FormComment
                                    post={post}
                                    setCommentOfPost={setCommentOfPost}
                                    commentOfPost={commentOfPost}
                                /> : null}
                                <div className="collapsable-comment">
                                    <div
                                        className="d-flex flex-row justify-content-between align-items-center action-collapse p-2"
                                        data-toggle="collapse"
                                        aria-expanded="false"
                                        aria-controls="collapse-1"
                                        href="#collapse-1"
                                    >
                                        <span>Comments</span>
                                        <i className="fa fa-chevron-down servicedrop"></i>
                                    </div>
                                    <div id="collapse-1" className="collapse">
                                        {commentOfPost && commentOfPost.map((item, index) => (
                                            <div className="commented-section mt-2" key={index.toString()}>
                                                <div className="d-flex flex-row align-items-center commented-user">
                                                    <h5 className="mr-2">{item.users_permissions_user.username}</h5>
                                                    <span className="dot mb-1"></span>
                                                    <span className="mb-1 ml-2">{moment(item.createdAt).calendar()}</span>
                                                </div>
                                                <div className="comment-text-sm">
                                                    <span>
                                                        {item.Message}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default React.memo(CommentGroup);