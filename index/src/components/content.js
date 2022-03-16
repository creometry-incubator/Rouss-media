import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from "axios"
import { useParams } from 'react-router-dom';
export default function Content(props) {
    const [article, setArticle] = useState({tags: []});
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
                <section class="section wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-title-area">
                                
                                
                                <div class="tag-cloud-single">
                                    <span>Tags</span>
                                    {article.tags.map((element)=>(
                                    <small><a href="#" title="">{element.text}</a></small>
                                ))}
                                    
                                   
                            </div>
                                <h3>{article.title}</h3>

                                <div class="blog-meta big-meta">
                                    <small><a href="single.html" title="">{(new Date(article.updatedAt)).toDateString()}, </a></small>
                                    <small><a href="blog-author.html" title="">by {article.author.username}</a></small>
                                </div>

                            </div>

                            <div class="single-post-media">
                                <img src={article.imageLink} alt="" class="img-fluid"/>
                            </div>

                            <div class="blog-content" dangerouslySetInnerHTML={{__html: article.content}} >  
                                 
                            </div>

                            

                        </div>
                    </div>

                    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <Sidebar/>
                    </div>
                </div>
            </div>
        </section>
            </div>
        );
}

 
