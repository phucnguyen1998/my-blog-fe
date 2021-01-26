import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function Post(props) {
    const { listPost } = props
    return (
        <>
            {listPost && listPost.map((post, index) => (
                <React.Fragment key={index.toString()}>
                    <div className="post-preview">
                        <Link to={`/post/${post.id}`}>
                            <h2 className="post-title">
                                {post.Title}
                            </h2>
                            <h3 className="post-subtitle">
                                {post.Description}
                            </h3>
                        </Link>
                        <p className="post-meta">Posted by
                        <span> {post.author.username} </span>
                        on {moment(post.createdAt).format('LLL')}</p>
                    </div>
                    <hr />
                </React.Fragment>
            ))}
        </>
    );
}

export default Post;