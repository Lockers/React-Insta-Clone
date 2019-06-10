import React from 'react'
import './CommentSection.css'

const CommentSection = props => {
    return (
        <div className='commentBox'>
            <p className='names'><img src='./logo-via-logohub.png' alt='nope' />{props.data.username}</p>
            <div className='images'>
                <img src={props.data.imageUrl} alt='Lovecock' />
            </div>
            
                {props.data.comments.map(comment => {
                return (
                    <div className='comments'>
                        <p className='names'>{comment.username}: </p>
                        <p>{comment.text}</p>
                    </div>
                    )
            })}
            <span><input type='text' defaultValue='Add Comment' /><button>Add</button></span>
        </div>
    )
}

export default CommentSection
