import React from 'react'

export const CommentSection = (props) => {
    return (
        <div>
            <p>{props.username}</p>
            <p>{props.comments}</p>
        </div>
        )
    }

