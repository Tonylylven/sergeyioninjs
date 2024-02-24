import Image from "next/image"

export default function Youtube(){
    return(
        <section className="youtube">
            <div className="container">
                <h2 className="youtube__title">Я на YouTube</h2>
                <div className="youtube__wrapper">
                    <div className="youtube__column">
                        <Image width={356} height={204} src="/youtube.png" alt="" className="youtube__img" />
                    </div>
                    <div className="youtube__column">
                        <Image width={356} height={204} src="/youtube.png" alt="" className="youtube__img" />
                    </div>
                </div>
            </div>
        </section>
    )
}