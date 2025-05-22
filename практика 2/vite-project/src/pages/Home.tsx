import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}
import {Button} from "../shared/Button"

import Text from '../shared/Text'
import {Input} from "../shared/Input"
import Notes from '../components/Notes'

class Home extends PureComponent<Props, State> {

    render(): ReactNode {
        return (
            <>  
                <div>
                    <br></br>
                    <br></br>
                    <Notes />
                </div>
            </>
            
        )
    }
}

export default Home
