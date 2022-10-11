import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import styles from "../../styles/Home.module.scss";


const Blog = ({blogs}) => (
    <div className={styles.container}>
    <Head>
        <title>Blog</title>
    </Head>
        <Heading text="Blog List:" tag="h1" />
        <ul>
            {blogs && blogs.map(({id, title}) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                    </li>
                )
            )}
        </ul>
    </div>

)

export default Blog
