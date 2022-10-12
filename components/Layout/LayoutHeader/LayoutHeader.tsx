
import Navbar from "./LayoutHeaderNavbar/Navbar";
import {FC} from "react";
import style from "./LayoutHeader.module.scss"
const LayoutHeader:FC = () => (
    <header className={style.header}>
        <Navbar/>
    </header>

)

export default LayoutHeader
