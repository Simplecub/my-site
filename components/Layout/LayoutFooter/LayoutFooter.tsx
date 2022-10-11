import Heading from "../../Heading";

import styles from '../../../styles/Home.module.scss'
import LayoutSocials, {SocialsProps} from "../LayoutSocials/LayoutSocials";
import {FC} from "react";
export interface FooterProps extends SocialsProps  {}


const LayoutFooter:FC<FooterProps> = ({socials}) => {

    return (

    <footer>
        <Heading tag="h3" text="LayoutFooter"/>
       <div className={styles.wrapper} >

       </div>
        <LayoutSocials socials={socials}/>
    </footer>

    )

}

export default LayoutFooter
