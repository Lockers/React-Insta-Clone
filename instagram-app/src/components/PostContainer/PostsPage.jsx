import React from 'react'
import { CommentSection } from '../CommentSection/CommentSection'
import './PostContainer.css'

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
            <div className='postContainer'>
                <img src={this.props.data.thumbnailUrl} alt='suckme' />
                {this.props.data.username}
                <img src={this.props.data.imageUrl} alt='nope' />
                <button onClick={this.addLikes}><img src='' alt={this.state.likes} /></button>
                
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
            </div>
        )
    }

}
