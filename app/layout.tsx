"use client";
import "./globals.css";
import Image from "next/image";
import "./styles/layout.sass";
import Link from "next/link";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <header className="header">
          <div className="header__container container">
            <div className="header__left">
              <Link href="/">
                <Image src="/Logo.png" width={219} height={66} alt="" />
              </Link>
            </div>
            <div className="header__right">
              <nav className="header__nav">
                <ul className="header__list">
                  <li>
                    <Link href="/blog">Блог</Link>
                  </li>
                  <li>
                    <Link href="/about">О мне</Link>
                  </li>
                </ul>
                <a
                  href="#"
                  className="header__person"
                >
                  <Image src="/user_profile.png" width={65} height={65} alt="" />
                </a>
              </nav>
            </div>
          </div>
        </header>
        {children}
        <section className="warn">
          <div className="container">
            <p className="warn__text">
              Все фото и видео материалы принадлежат их владельцам и
              использованы исключительно в целях демонстрации. <br />{" "}
              Пожалуйста, не используйте их в коммерческих целях.
            </p>
          </div>
        </section>
        <footer className="footer">
          <div className="footer__container container">
            <div className="footer__left">
              <a href="#">
                <Image src="/Logo.png" width={219} height={66} alt="" />
              </a>
            </div>
            <div className="footer__right">
              <nav className="footer__nav">
                <ul className="footer__list">
                  <li>Блог</li>
                  <li>О мне</li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
