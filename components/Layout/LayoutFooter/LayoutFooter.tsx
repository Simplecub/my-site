import Heading from "../../Heading";

import styles from '../../../styles/Home.module.scss'
import LayoutSocials, {SocialsProps} from "../LayoutSocials/LayoutSocials";
import {FC} from "react";
export interface FooterProps extends SocialsProps  {}


const Footer:FC<FooterProps> = ({socials}) => {

    return (

    <footer>
        <Heading tag="h3" text="Footer"/>
       <div className={styles.wrapper} >

       </div>
        <LayoutSocials socials={socials}/>
    </footer>

    )

}

export default Footer
