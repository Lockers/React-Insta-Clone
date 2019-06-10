import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'

import './PostContainer.css'

const PostContainer = props => {
    return (
        <div className='postContainer'>
            {
                props.dummyData.map(data => {
                    return <CommentSection key={data.timestamp} data={data} />
                })
                
            }
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