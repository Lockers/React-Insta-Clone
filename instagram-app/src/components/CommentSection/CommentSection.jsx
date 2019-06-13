import React from 'react'
import styled from 'styled-components'

const P = styled.p`
    font-weight: bolder;
`

export const CommentSection = (props) => {
    return (
        <div className='commentSection'>
            <P>{props.username}</P>
            <p>{props.comments}</p>
        </div>
        )
    }

