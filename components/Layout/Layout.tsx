import Header from "./Header";
import Footer from "./Footer";
import {FC, ReactNode} from "react";

import type {FooterProps} from "./Footer";

type LayoutProps = {
    children: ReactNode,
    socials: FooterProps["socials"],
}


const Layout:FC<LayoutProps> = ({children, socials}) => (
    <>
        <Header/>
        {children}
        <Footer socials={socials}/>

    </>
)
export default Layout
