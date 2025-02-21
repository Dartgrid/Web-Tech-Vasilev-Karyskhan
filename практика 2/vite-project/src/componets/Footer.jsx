import React, { PureComponent } from 'react'

class Footer extends PureComponent {

    render() {
        return (
            <>
                <hr></hr>
                <a href='/'>Home </a>
                <a href='/about'>About </a>
                <a href='/blog'>Blog</a>
            </>
        )
    }
}

export default Footer