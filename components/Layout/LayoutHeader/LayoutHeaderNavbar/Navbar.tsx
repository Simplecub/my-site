import {useRouter} from "next/router";
import styles from "./LayoutHeaderNavbar.module.scss"
import Link from "next/link";
import Image from "next/image";
import React, {FC} from "react";

const navigation = [
   // {id: 0, title: 'Home', path: '/'},
    {id: 1, title: 'Works', path: '/works'},
    {id: 2, title: 'Blog', path: '/blog'},
    {id: 3, title: 'Contact', path: '/contact'},
];

const Navbar: FC = () => {
    const {pathname} = useRouter() //чтобы подсвечивалась ссылка внизу

    return (
        <nav className={styles.nav}>
            <div className={styles.nav}>
                <Link  href={'/'}>
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
            <button className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>
        </nav>
    )
}


export default Navbar

/*
<Link key={45235} href='/'>
                    <Image src="/logob.svg" width={60} height={30} alt="LOGO" />
                </Link>
 */
