

export default function Answer(){
    return(
        <section className="answer">
        <div className="container">
            <h2 className="answer__title">Задайте вопрос</h2>
            <div className="answer__wrapper">
                <form action="#" className="answer__form">
                    <input className="answer__input-text" placeholder="Email" type="text" />
                    <input className="answer__input-text" placeholder="Имя" type="text" />
                    <textarea className="answer__textarea" placeholder="Сообщение" />
                    <input className="answer__input-submit" placeholder="" type="submit" />
                </form>
            </div>
        </div>
    </section>
    )
}