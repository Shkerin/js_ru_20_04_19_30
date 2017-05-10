import React  from 'react';
import PropTypes from 'prop-types';

function Comment({comment}) {
    return (
        <div>
            <p>{comment.text} <b>by {comment.user}</b></p>
        </div>
    )
}

Comment.PropTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string,
        text: PropTypes.string
    })
};

export default Comment