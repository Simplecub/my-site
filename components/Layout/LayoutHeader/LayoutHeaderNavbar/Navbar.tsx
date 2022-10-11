import {useRouter} from "next/router";
import styles from "./LayoutHeaderNavbar.module.scss"
import Link from "next/link";
import Image from "next/image";
import React, {FC} from "react";

const navigation = [
    {id: 1, title: 'Works', path: '/'},
    {id: 2, title: 'Blog', path: '/blog'},
    {id: 3, title: 'Contact', path: '/contact'},
];

const Navbar: FC = () => {
    const {pathname} = useRouter() //чтобы подсвечивалась ссылка внизу

    return (
        <nav className={styles.nav}>
            <div className={styles.nav}>
                <Link  href={navigation[0].path}>
                    <div>
                        <Image src="/logob.svg" width={60} height={30} alt="LOGO" />
                    </div>
                </Link>
            </div>
            <div className={styles.nav}>
                {navigation.map(({id, title, path}) => (
                    <Link key={id} href={path}>
                        <a className={pathname === path ? styles.active : null}>{title}</a></Link>
                ))}

            </div>
        </nav>
    )
}


export default Navbar

/*
<Link key={45235} href='/'>
                    <Image src="/logob.svg" width={60} height={30} alt="LOGO" />
                </Link>
 */
