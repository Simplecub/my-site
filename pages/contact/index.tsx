import Head from "next/head";
import Heading from "../../components/Heading";
import styles from "../../styles/Home.module.scss";


const Contact = () =>(
    <div className={styles.container}>
        <Head>
            <title>Contacts</title>
        </Head>
        <Heading text="My contacts" />
        <div> tel: 646@6546</div>
    </div>

)

export default Contact
