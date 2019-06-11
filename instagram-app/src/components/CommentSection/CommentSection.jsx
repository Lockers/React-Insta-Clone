import React from 'react'
import './CommentSection.css'

const CommentSection = props => {
  
        return (
            <div className='commentBox'>
                {props.comments.map((comment, index) => {
                    return (
                        <div key={index} className='comments'>
                            <p className='names'>{comment.username}: </p>
                            <p>{comment.text}</p>
                        </div>
                    )
                })}
                <form onSubmit={(event, ) => props.addComment} >
                    <input
                        type='text'
                        name='title'
                        style={{ flex: '10', padding: '5px' }}
                        placeholder='Add Comment'
                        value={props.commentName}
                        onChange={props.changeHandler}
                    />
                    <input
                        type='submit'
                        value='Submit'
                        className='btn'
                    
                    />

                </form>
                <button onClick={props.addLikes}>Add ME</button>
            </div>
        )
    }
 export default CommentSection
