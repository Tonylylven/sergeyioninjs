import Link from "next/link"
import Image from "next/image"
import { getPostsData } from "../../../lib/blog_functions";


export default async function Hero_blog(){
    const blogs = await getPostsData();

    if (blogs.length === 0) {
		return (
			<div className="container mx-auto p-4">
				There are no posts yet...
			</div>
		);
	}

    return(
        <section className="hero_blog">
            <div className="container">
                <div className="hero_blog__wrapper">
                    <Image width={138} height={138} src="/blog_avatar.png" alt="Блог" className="hero_blog__image" />
                    <h1 className="hero_blog__title">Блог</h1>
                    <p className="hero_blog__text">Полезная информация из личной и православной психологической практики. Ответы на вопросы моих подписчиков и читателей.</p>
                    <div className="hero_blog__row">
                        {blogs.map((blog) => {
                            return (
                                <div key={blog.id} className="hero_blog__column">
                                    <h2 className="hero_blog__subtitle">{blog.title}</h2>
                                    <p className="column__text">{blog.description}</p>
                                    <Link prefetch={false} href={`/blog/${blog.id}`}>читать подробнее</Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}