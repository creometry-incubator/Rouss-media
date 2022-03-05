import React, { useEffect, useState } from 'react';
import BlogBox4 from './BlogBox4';
import { useSearchParams   } from 'react-router-dom';
import axios from 'axios';

export default function SearchResult () {
    let [searchParams] = useSearchParams();
    const [search, setSearch] = useState('');
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        setSearch(searchParams.get("filter"))
        if(searchParams.get("filter")){
            axios.get(window.ENV.ARTICLE_SERVICE_URI+"/?filter="+searchParams.get("filter")).then(res=>{
                setArticles(res.data)
            })
        }
    }, [])
        return (
            <div>
                <div class="page-title wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2> {search} </h2>
                    </div>
                                       
                </div>
            </div>
        </div>

        <section class="section wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="portfolio row">
                                {articles.map((article, index)=>(
                                    <div key={index} className='col-md-4'>
                                    <BlogBox4 article={article} />
                                    </div>
                                ))}
                                
                                
                            </div>
                        </div>

                        <hr class="invis"/>

                        {/* {<div class="row">
                            <div class="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination justify-content-start">
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>} */}
                    </div>
                </div>
            </div>
        </section>
            </div>
        );
    }

 
