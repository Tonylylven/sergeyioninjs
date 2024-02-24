import Image from "next/image"

export default function Favorites(){
    return(
        <section className="favorites">
            <div className="container">
                <h2 className="favorites__title">Особенности</h2>
                <div className="favorites__wrapper">
                    <div className="favorites__row">
                        <div className="column__left">
                            <Image width={100} height={100} src="/Development Skill.png" alt="Опыт" />
                        </div>
                        <div className="column__right">
                            <p>Работал как врач-психиатр в Московском НИИ <br /> Психиатрии на протяжении 5 лет</p>
                        </div>
                    </div>

                    <div className="favorites__row">
                        <div className="column__left">
                            <Image width={100} height={100} src="/Student Center.png" alt="Диплом" />
                        </div>
                        <div className="column__right">
                            <p>Диплом психотерапевта — Центральный институт <br /> усовершенствования врачей</p>
                        </div>
                    </div>

                    <div className="favorites__row">
                        <div className="column__left">
                            <Image width={100} height={100} src="/Diploma.png" alt="Обучение" />
                        </div>
                        <div className="column__right">
                            <p>Закончил Московский Государственный Медицинский Университет <br /> (лечебный факультет) <br />
                                Дополнительно проходил повышение квалификации в Московском Институте Психотерапии</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}