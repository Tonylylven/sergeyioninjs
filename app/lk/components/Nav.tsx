import Link from "next/link"

export default function Nav(){
    return(
        <nav className="lk__menu">
            <ul className="lk__list">
                <li className="lk__item">
                    <Link href="#" className="link-menu">Профиль</Link>
                </li>
                <li className="lk__item">
                    <Link href="#" className="link-menu">История заказов</Link>
                </li>
                <li className="lk__item">
                    <Link href="#" className="link-menu">Выход</Link>
                </li>
            </ul>
        </nav>
    )
}