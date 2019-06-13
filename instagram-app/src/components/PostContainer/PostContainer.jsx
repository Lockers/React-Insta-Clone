import React from 'react'
import { PostsPage } from './PostsPage'
import {SearchBar} from '../SearchBar/SearchBar'

export const PostContainer = props => {
    return (
        <div className="AppContainer">
            <SearchBar />
            {
                props.dummyData.map((data, index) => {
                    return <PostsPage data={data} key={index} likes={data} logout={props.logout} />
                })
            }
        </div>
    )
}
