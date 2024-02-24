import Image from "next/image"

export default function Personal_info(){
    return(
        <div className="info">
            <Image width={131} height={122} src="/user_lk.png" alt="" className="info__img" />
            <form action="" className="info__form">
                <div className="info__form-row">
                    <div className="info__form-input-wrapper">
                        <label htmlFor="">Фамилия:</label>
                        <input type="text" />
                    </div>
                    <div className="info__form-input-wrapper">
                        <label htmlFor="">Почта:</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="info__form-row">
                    <div className="info__form-input-wrapper">
                        <label htmlFor="">Имя:</label>
                        <input type="text" />  
                    </div>
                    <div className="info__form-input-wrapper">
                        <label htmlFor="">Телефон:</label>
                        <input type="text" />
                    </div>
                </div>
            </form>
        </div>
    )
}