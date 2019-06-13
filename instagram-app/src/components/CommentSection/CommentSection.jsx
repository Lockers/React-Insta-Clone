import React from 'react'
import './CommentSection.css'

export const CommentSection = (props) => {
    return (
        <div className='commentSection'>
            <p>{props.username}</p>
            <p>{props.comments}</p>
        </div>
        )
    }

