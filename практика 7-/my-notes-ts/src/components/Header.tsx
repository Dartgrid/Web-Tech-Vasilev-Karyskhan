import React, { PureComponent } from 'react'
import { Button } from '../shared/Button'

class Header extends PureComponent {
    render() {
        const loggedIn = !!localStorage.getItem("token"); // Или через функцию
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
                                </ul>
                            </nav>
                        </div>
                        <div className="flex gap-4">
                            {!loggedIn ? (
                                <>
                                    <a href="/login">
                                        <Button color="blue" size="small" title="Вход" />
                                    </a>
                                    <a href="/register">
                                        <Button color="secondary" size="small" title="Регистрация" />
                                    </a>
                                </>
                            ) : (
                                <Button
                                    color="gray"
                                    size="small"
                                    title="Выйти"
                                    onClick={() => {
                                        localStorage.removeItem("token");
                                        window.location.reload();
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default Header
