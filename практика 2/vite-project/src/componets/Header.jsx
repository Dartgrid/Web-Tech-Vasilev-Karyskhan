import React, { PureComponent } from 'react'

class Header extends PureComponent {

    render() {
        return (    
            <>
                <a href='/'>Home </a>
                <a href='/about'>About </a>
                <a href='/blog'>Blog</a>
                <hr></hr>
            </>
            
        )
    }
}

export default Header