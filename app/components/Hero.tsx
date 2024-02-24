import Image from "next/image"

export default function Hero() {
    return(
        <section className="hero">
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__left">
                        <Image width={321} height={446} src="/photo_avatar.png" alt="Аватар" />
                    </div>
                    <div className="hero__right">
                        <h1 className="hero__title">Сергей Ионин</h1>
                        <p className="hero__info">Православный психолог. В моей работе я основываюсь на принципах &quot;Нравственно ориентированной психотерапии&quot;, разработанной доктором В. Боровских. Этот подход включает в себя объединение психологических методов и принципов православной веры, чтобы обеспечить эффективное и глубокое психотерапевтическое воздействие.</p>
                        <div className="btn-wrapper">
                            <button className="hero__btn">Записаться</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}