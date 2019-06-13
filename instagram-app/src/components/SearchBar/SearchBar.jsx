import React from 'react'
import './SearchBar.css'

export class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {
            
        }
    }
    render() {
        return (
            <div className='searchBar'>
                <img src='' alt='Insta Logo' />
                <img src='' alt='icon' />
                <img src='' alt='icon2' />
                <img src='' alt='icon3' />
                <form>
                <input
                    type='text'
                    name='name'
                    value='Search'
                    onChange={this.props.search}
                    />
                </form>
            </div >
        )
    }
}
