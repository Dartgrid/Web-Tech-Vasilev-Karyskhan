import React, { PureComponent, ReactNode } from 'react'
import { Helmet } from "react-helmet";
interface Props {}
interface State {}
import Notes from '../components/Notes'

class Home extends PureComponent<Props, State> {

    render(): ReactNode {
        return (
            <>  
                <Helmet>
                    <title>MemoSpace — Главная</title>
                    <meta name="description" content="MemoSpace — ваш онлайн блокнот для быстрых заметок и идей." />
                    <meta name="keywords" content="заметки, блокнот, memospace, заметка онлайн, записки" />
                </Helmet>
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
