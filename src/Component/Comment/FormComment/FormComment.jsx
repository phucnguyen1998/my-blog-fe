import React from 'react';

function FormComment(props) {
    const { user, handleSubmit, comment, setComment } = props
    return (
        <>
            <div className="d-flex flex-row add-comment-section mt-4 mb-4">
                <img
                    className="img-fluid img-responsive rounded-circle mr-2"
                    src={user.Avatar.url}
                    style={{ width: 50 }}
                    alt='avatar'
                />
                <input
                    type="text"
                    className="form-control mr-3"
                    placeholder="Add comment"
                    value={comment}
                    onChange={(e) => { setComment(e.target.value) }}
                />
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => { handleSubmit(user) }}
                >
                    Comment
                </button>
            </div>
        </>
    );
}

export default React.memo(FormComment);