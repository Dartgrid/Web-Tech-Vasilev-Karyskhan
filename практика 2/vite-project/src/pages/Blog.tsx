import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class Blog extends PureComponent<Props, State> {

    render(): ReactNode {
        return (
            <h1>Blog</h1>
        )
    }
}

export default Blog
