import React from 'react';
import HeaderPost from './HeaderPost';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import Comment from './../../Component/Comment'

function Post(props) {
    const { post } = props;
    if (post)
        return (
            <>
                <HeaderPost
                    title={post.Title}
                    description={post.Description}
                    author={post.author ? post.author.username : 'Anonymous'}
                    dateTime={moment(post.createdAt).format('LLL')}
                />
                <article>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <ReactMarkdown
                                    children={post.Content}
                                />
                            </div>
                        </div>
                    </div>
                </article>
                {post && <Comment post={post} listComment={post.comments} />}
            </>
        );
    return null;
}

export default React.memo(Post);