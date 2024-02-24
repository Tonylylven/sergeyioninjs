
export default function Price(){
    return(
        <section className="price">
            <div className="container">
                <h2 className="price__title">Цены на услуги</h2>
                <div className="price__wrapper">
                    <div className="price__row">
                        <p className="price__text">Первичная консультация со скидкой*</p>
                        <p className="cost">2000 ₽</p>
                    </div>

                    <div className="price__row">
                        <p className="price__text">Первичный прием</p>
                        <p className="cost">3000 ₽</p>
                    </div>

                    <div className="price__row">
                        <p className="price__text">Повторный прием</p>
                        <p className="cost">4000 ₽</p>
                    </div>

                    <div className="price__row">
                        <p className="price__text">Семейная консультация</p>
                        <p className="cost">5000 ₽</p>
                    </div>
                </div>
                <p className="discount">*Скидка оказывается только для многодетных и малоимущих семей</p>
            </div>
        </section>
    )
}