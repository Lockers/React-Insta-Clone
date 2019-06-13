import React from 'react'
import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  border: 1px solid black;
  justify-content: center;
  margin: auto 0;
  max-width: 800px;
`
export const Form = styled.form`
    margin: 0px 200px;
`

export class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {
            
        }
    }
    render() {
        return (
            <Div>
                
                <img src="https://img.icons8.com/metro/26/000000/instagram-new.png" alt='Insta Logo' />
                <p>Instagram</p>
                <Form>
                <input
                    type='text'
                    name='name'
                    value='Search'
                    onChange={this.props.search}
                    />
                </Form>
                
                <img src='' alt='icon' />
                <img src="" alt='icon2' />
                <img src='' alt='icon3' />
            </Div>
        )
    }
}
