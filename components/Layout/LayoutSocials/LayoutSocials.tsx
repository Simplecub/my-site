import Head from "next/head";
import styles from "./LayoutSocials.module.scss";
import {socialsType} from "../../../types";
import {FC} from "react";
import {socials} from "./socials";

export interface SocialsProps {
    socials: {
    id: number,
    icon: string,
    path: string,
}[],
}

const LayoutSocials:FC<SocialsProps> = () => {
       console.log(socials)
    if (!socials) {
        return null
    }
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />

            </Head>
            <ul className={styles.socials}>
                {socials && socials.map(({ id, icon, path }) => (
                    <li key={id}>
                        <a href={path} target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-${icon} `} aria-hidden="true" />
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default LayoutSocials;

