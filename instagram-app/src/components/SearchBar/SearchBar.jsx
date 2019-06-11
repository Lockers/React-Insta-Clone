import React from 'react'
import './SearchBar.css'

const SearchBar = props => {
    return (
        <div className='searchBar'>
            <div className='iconthing'>
                <img src=' https://besticon-demo.herokuapp.com/icon?url=instagram.com&size=80..120..200' alt='LOL'/>
            </div>
            <div>
            <input type='text' defaultValue='Search' />
            </div>  
        </div>
    )
}

export default SearchBar