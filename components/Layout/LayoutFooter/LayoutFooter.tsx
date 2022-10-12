import Heading from "../../Heading";

import styles from './LayoutFooter.module.scss'
import LayoutSocials, {SocialsProps} from "../LayoutSocials/LayoutSocials";
import {FC} from "react";
export interface FooterProps extends SocialsProps  {}


const LayoutFooter:FC<FooterProps> = ({socials}) => {

    return (
    <footer className={styles.footer} >
       <div>
           <LayoutSocials socials={socials}/>
           <Heading tag="h3" text="LayoutFooter"/>
       </div>
    </footer>
    )
}

export default LayoutFooter
