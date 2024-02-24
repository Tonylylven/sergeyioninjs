import Link from "next/link"
import Image from "next/image"

export default function Connect(){
    return(
        <section className="connect">
            <div className="container">
                <h1 className="connect__title">Присоединяйтесь:</h1>
                <div className="connect__wrapper">
                    <Link href="#"><Image width={191} height={180} src="/yt.png" alt="" /></Link>
                    <Link href="#"><Image width={191} height={180} src="/vk.png" alt="" /></Link>
                    <Link href="#"><Image width={191} height={180} src="/tg.png" alt="" /></Link>
                    <Link href="#"><Image width={191} height={180} src="/wa.png" alt="" /></Link>
                </div>
            </div>
        </section>
    )
}