import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class About extends PureComponent<Props, State> {

    render(): ReactNode {
        return (
            <h1>About</h1>
        )
    }
}

export default About
