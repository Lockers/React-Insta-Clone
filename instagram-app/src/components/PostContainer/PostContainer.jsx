import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
import './PostContainer.css'

const PostContainer = props => {
    return (
        <div className='postContainer'>
            <div className='thumbNail'>
                <div className='imageContainer'><img className='thumb' src={props.postData.thumbnailUrl} alt='nope' /></div>
                <p className='names'>{props.postData.username}</p>
            </div>
            <div className='images'>
                <img src={props.postData.imageUrl} alt='Loveit' />
            </div>
            <CommentSection comments={props.postData.comments} changeHandler={props.changeHandler} addComment={props.addComment} addLikes={props.addLikes} />
        </div>
    )
}
 
PostContainer.propTypes = {
    dummyData: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            timestamp: PropTypes.string.isRequired,
            comments: PropTypes.arrayOf({
                username: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired
            })
    }))
}
export default PostContainer