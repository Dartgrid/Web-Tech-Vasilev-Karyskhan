import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class Home extends PureComponent<Props, State> {

    render(): ReactNode {
        return (
            <h1>Home</h1>
        )
    }
}

export default Home
