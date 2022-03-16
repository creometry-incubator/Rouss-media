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
                <div className="page-title wb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2> {search} </h2>
                    </div>
                                       
                </div>
            </div>
        </div>

        <section className="section wb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="page-wrapper">
                            <div className="portfolio row">
                                {articles.map((article, index)=>(
                                    <div key={index} className='col-md-4'>
                                    <BlogBox4 article={article} />
                                    </div>
                                ))}
                                
                                
                            </div>
                        </div>

                        <hr className="invis"/>

                        {/* {<div className="row">
                            <div className="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
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

 
