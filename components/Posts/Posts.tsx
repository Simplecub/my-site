import Heading from "../Heading";
import {postsAll} from "./postsAll";
import {format} from "date-fns";
import style from './Posts.module.scss'

const Posts = () =>{

    return (
        <>
            { postsAll && postsAll.map(({id,title, type, date, content},index) => (
                <div className={style.div} key={id}>
                    <Heading  text={title} tag={'h2'}/>
                    <h6>{format(date,'dd MMM yyyy') + ' | '} {type.join(', ')}
                    </h6>
                    <p>{ content}
                    </p>
                    {index < postsAll.length-1 ? (<hr/>): ''}
                </div>
            ))}
        </>
    )
}

export default Posts
