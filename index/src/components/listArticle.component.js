import axios from "axios"
import { useEffect, useState } from "react"
import Sign from "./signIn.component";
import {useCookies} from "react-cookie"

export default function List(){
    const [articles, setArticles] = useState([]);
    const [filter, setFilter] = useState("");
    const [cookies] = useCookies(['gloomeyToken']);

    useEffect(()=>{
        axios.get(window.ENV.ARTICLE_SERVICE_URI).then(res=>{
            setArticles(res.data)
        })
    }, [])
    const delArticle = (id, i)=>{
        axios.delete(window.ENV.ARTICLE_SERVICE_URI+"/"+id).then(res=>{
            window.alert(res.data);
            setArticles(articles.filter((art, index) => index !== i));
        })
    }
    const search = ()=>{
        axios.get(window.ENV.ARTICLE_SERVICE_URI+"/?filter="+filter).then(res=>{
            setArticles(res.data)
        })
    }
    return(
        <div>
            <Sign />
            {cookies.gloomeyToken?
             <div>
<button onClick={()=>window.location = "/#/editor" }>add article</button>
            <input type="text" placeholder="" value={filter} onChange={(e)=>{
                setFilter(e.target.value)
            }}/>
            <button onClick={search}>search</button>
            <ul>
                {articles.map((article, index)=>(
                    <li key={index}>
                        <p>{article.title}</p>
                        <img src={article.imageLink} width="200"></img>
                        <button onClick={()=>window.location = "/#/editor?id="+article._id}>update</button>
                        <button onClick={()=>delArticle(article._id, index)}>delete</button>
                    </li>
                ))}
                
            </ul>
             </div> : <div>
                 </div>}
            

        </div>
    )
}