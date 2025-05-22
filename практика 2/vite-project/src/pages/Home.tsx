import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}
class Home extends PureComponent<Props, State> {

    render(): ReactNode {
        return (
            <>  
                <div className="w-full flex">
                    Home
                </div>
            </>
            
        )
    }
}

export default Home
