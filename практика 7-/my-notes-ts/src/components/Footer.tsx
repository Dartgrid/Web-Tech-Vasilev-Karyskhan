import React, { PureComponent } from 'react'

class Footer extends PureComponent {

    render() {
        return (
           <>
            <div className="flex w-full justify-center overflow-hidden">
                <div className="flex justify-center max-w-[1440px] relative mt-[140px] mb-[25px] flex-col gap-[15px] items-center">
                    <img className="w-[140px] h-[30px]" src="/src/images/logo.svg" alt=""  />

                    <span className="font-semibold flex gap-2">
                        <span>
                            @ DartGrid
                        </span> 
                        <span>
                            | 
                        </span>
                        <span>
                            Политика обработки персональных данных
                        </span>                    
                    </span>
                </div>

            </div>
        </>
        )
    }
}

export default Footer