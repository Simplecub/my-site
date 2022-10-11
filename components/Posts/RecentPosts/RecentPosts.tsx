import {postsAll} from '../postsAll'
import Heading from "../../Heading";
import style from '/styles/Home.module.scss'
import Link from "next/link";
import {FC} from "react";
import { format } from 'date-fns'


export interface RecentPosts {
    postsAll: {
        id: number,
        title: string,
        date: number[],
        type: string[],
        content: string
    }[]
}

const RecentPosts: FC<RecentPosts> = () => {


    const recent = postsAll.sort((a, b) => +(b.date) - +(a.date)).slice(0, 2)
    console.log(recent)

    return (
        <>
            <div>
                <Heading tag={'h5'} text={'Recent posts'}/>
                <Link className={style.link} href={'/blog'}> View all</Link>
                <div className={style.grid}>
                    {recent && recent.map(({id, title, date, type, content}) => (
                        <Link href={'/blog'} key={id}>
                            <div className={style.card} key={id}>
                                <Heading tag='h2' text={title}/>
                                <h6>{format(date,'dd MMM yyyy') + ' | '} {type.join(', ')}
                                </h6>
                                <p>{content}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}


export default RecentPosts
