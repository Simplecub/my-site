import LayoutHeader from "./LayoutHeader/LayoutHeader";
import LayoutFooter from "./LayoutFooter/LayoutFooter";
import {FC, ReactNode} from "react";

import type {FooterProps} from "./LayoutFooter/LayoutFooter";

type LayoutProps = {
    children: ReactNode,
    socials: FooterProps["socials"],
}


const Layout:FC<LayoutProps> = ({children, socials}) => (
    <>
        <LayoutHeader/>
        {children}
        <LayoutFooter socials={socials}/>

    </>
)
export default Layout
