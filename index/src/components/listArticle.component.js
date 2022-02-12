import axios from "axios"
import { useEffect, useState } from "react"

export default function List(){
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        axios.get(window.ENV.ARTICLE_SERVICE_URI).then(res=>{
            setArticles(res.data)
        })
    }, [])
    const delArticle = (id)=>{
        axios.delete(window.ENV.ARTICLE_SERVICE_URI+"/"+id).then(res=>{
            window.alert(res.data)
        })
    }
    return(
        <div>
            this is a list
            <button onClick={()=>window.location = "/#/editor" }>add article</button>
            <ul>
                {articles.map((article, index)=>(
                    <li key={index}>
                        <p>{article.title}</p>
                        <img src={window.ENV.ARTICLE_SERVICE_URI+"/image/"+article._id} width="200"></img>
                        <button onClick={()=>window.location = "/#/editor?id="+article._id}>update</button>
                        <button onClick={()=>delArticle(article._id)}>delete</button>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}