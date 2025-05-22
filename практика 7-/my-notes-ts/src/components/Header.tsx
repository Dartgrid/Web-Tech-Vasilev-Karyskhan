import React, { PureComponent } from 'react'

class Header extends PureComponent {

    render() {
        return (    
           <>
            <header className="w-full h-10 flex justify-center items-center">
                <div className="max-w-[1240px] w-full flex justify-between items-center mt-[50px]">
                    <div className="flex gap-28">
                        <img src="/src/images/logo.svg" alt="logo" />
                        
                        <nav>
                            <ul className="font-semibold flex gap-[35px]">
                                <li>
                                    <a href="/">Главная</a>
                                </li>
                                <li>
                                    <a href="/about">О нас</a>
                                </li>
                                <li>
                                    <a href="/blog">Блог</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </header>
        </>
            
        )
    }
}

export default Header