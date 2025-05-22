import React, { PureComponent, ReactNode } from 'react'
import { Helmet } from "react-helmet";
interface Props {}
interface State {}

class About extends PureComponent<Props, State> {

    render(): ReactNode {
        return (
        <>
            <Helmet>
                <title>О сервисе | MemoSpace</title>
                <meta name="description" content="Узнайте больше о сервисе MemoSpace — удобном онлайн-блокноте для ваших заметок." />
                <meta name="keywords" content="о сервисе, заметки, memospace, как пользоваться, блокнот" />
            </Helmet>
            <h1>О сервисе MemoSpace</h1>
        </>
            
        )
    }
}

export default About
