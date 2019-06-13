import React from 'react'
import { CommentSection } from '../CommentSection/CommentSection'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 10px;

`

const Img = styled.img`
    flex-direction: row;
    width: 25px;
    height: 25px;  
`

export class PostsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: this.props.likes.likes,
            comments: this.props.data.comments,
            comment: ''
        }
        console.log(props.logout)
    }
    addLikes = () => {
        this.setState((prevState => {
            return {
                likes: prevState.likes + 1
            }
        }))
    }
    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }
    addComments = (event) => {

        event.preventDefault()
        const NewComment = {
            username: 'Matt',
            text: this.state.comment,
        }
        this.setState({ comments: this.state.comments.concat(NewComment) })
        this.setState({ comment: '' })
    }

    render() {
        return (
            <Div>
                <p><Img src={this.props.data.thumbnailUrl} alt='suckme' /> {this.props.data.username} </p>
                

                <img src={this.props.data.imageUrl} alt='nope' />
                <button label='Likes' onClick={this.addLikes}><img src="" alt={this.state.likes} /></button>
                
                {
                    this.state.comments.map((comment, index) => <CommentSection comments={comment.text} username={comment.username} key={index} />)
                }

                <div>
                    <form onSubmit={this.addComments}>
                        <input
                            type='text'
                            name='name'
                            onChange={this.handleChange}
                            value={this.state.comment}
                        />
                        <input
                            type='submit'
                            value='Submit'
                        />
                    </form>
                    <button onClick={this.props.logout}>Logout</button>
                </div>
            </Div>
        )
    }

}
