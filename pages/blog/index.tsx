import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import styles from "../../styles/Home.module.scss";
import Posts from "../../components/Posts/Posts";


const Blog = ({blogs}) => (
    <div className={styles.container}>
    <Head>
        <title>Blog</title>
    </Head>
        <Heading text="Blog List:" tag="h1" />
      <Posts/>

    </div>

)

export default Blog
