import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}
import Button from "../shared/Button"
import Text from '../shared/Text'
import Input from "../shared/Input"
class Home extends PureComponent<Props, State> {

    render(): ReactNode {
        return (
            <>  
                <div>
                    <br></br>
                    <br></br>
                  <hr></hr>
                  <Button color="primary" size="large" title="Подтвердить" />
                  <Button color="secondary" size="medium" title="Подтвердить" />
                  <br></br>
                  <Text size="large" color="secondary" as="h1">Привет, мир!</Text>
                    <br></br>
                    <Input size="large" color="secondary" placeholder="Введите текст..." />

                </div>
            </>
            
        )
    }
}

export default Home
