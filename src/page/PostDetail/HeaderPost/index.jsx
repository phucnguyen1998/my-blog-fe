import React from 'react';

function HeaderPost(props) {
    const { title, description, author, dateTime } = props
    return (
        <>
            <header className="masthead" style={{ backgroundImage: "url('img/post-bg.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="post-heading">
                                <h1>{title}</h1>
                                <h2 className="subheading">{description}</h2>
                                <span className="meta">Posted by
                                <span> {author} </span>
                                    on {dateTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderPost;