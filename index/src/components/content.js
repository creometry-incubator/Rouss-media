import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from "axios"
import { useParams } from 'react-router-dom';
export default function Content(props) {
    const [article, setArticle] = useState({tags: [], author: {username: ""}});
    const { id } = useParams()
    useEffect(()=>{
        axios.get(`${window.ENV.ARTICLE_SERVICE_URI}/${id}`).then(res=>{
            if(res.data._id)
            setArticle(res.data)
            else{
                window.location = "/#/404"
            }
        })
    }, [])
    return (
            <div>
                <section className="section wb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div className="page-wrapper">
                            <div className="blog-title-area">
                                
                                
                                <div className="tag-cloud-single">
                                    <span>Tags</span>
                                    {article.tags.map((element, index)=>(
                                    <small key={index}><a href="#" title="">{element.text}</a></small>
                                ))}
                                    
                                   
                            </div>
                                <h3>{article.title}</h3>

                                <div className="blog-meta big-meta">
                                    <small><a href="single.html" title="">{(new Date(article.updatedAt)).toDateString()}, </a></small>
                                    <small><a href="blog-author.html" title="">by {article.author.username}</a></small>
                                </div>

                            </div>

                            <div className="single-post-media">
                                <img src={article.imageLink} alt="" className="img-fluid"/>
                            </div>

                            <div className="blog-content" dangerouslySetInnerHTML={{__html: article.content}} >  
                                 
                            </div>

                            

                        </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <Sidebar/>
                    </div>
                </div>
            </div>
        </section>
            </div>
        );
}

 
