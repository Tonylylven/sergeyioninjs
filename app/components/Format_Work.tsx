import Image from "next/image"

export default function Format_work(){
    return(
        <section className="format">
            <div className="container">
                <h2 className="format__title">Формат работы</h2>
                <div className="format__wrapper">
                    <div className="format__left">
                        <Image width={148} height={134} src="/White no wifi icon.png" alt="Offline" />
                        <h3 className="format__subtitle">Offline-встречи</h3>
                        <p className="format__text">Вы можете записаться на встречу и <br /> договориться о дате встречи со <br /> мной</p>
                    </div>

                    <div className="format__right">
                        <Image width={148} height={134} src="/White wifi icon.png" alt="Online" />
                        <h3 className="format__subtitle">Online-встречи</h3>
                        <p className="format__text">Вы можете записаться на встречу online <br /> и договориться о времени ее <br /> проведения со мной</p>
                    </div>
                </div>
            </div>
        </section>
    )
}