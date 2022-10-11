import Header from "./LayoutHeader/Header";
import LayoutFooter from "./LayoutFooter/LayoutFooter";
import {FC, ReactNode} from "react";

import type {FooterProps} from "./LayoutFooter/LayoutFooter";

type LayoutProps = {
    children: ReactNode,
    socials: FooterProps["socials"],
}


const Layout:FC<LayoutProps> = ({children, socials}) => (
    <>
        <Header/>
        {children}
        <LayoutFooter socials={socials}/>

    </>
)
export default Layout
