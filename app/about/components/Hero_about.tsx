import Image from "next/image"

export default function Hero_about(){
    return (
        <section className="hero_about">
            <div className="container">
                <h1 className="hero_about__title">О мне</h1>
                <div className="hero_about__wrapper">
                    <Image className="hero_about__img" width={280} height={387} src="/photo_avatar.png" alt="О мне" />
                    <p className="hero_about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </section>
    )
}