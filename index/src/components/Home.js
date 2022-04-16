import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import BlogBox1 from "./BlogBox1";
import BlogBox2 from "./BlogBox2";
import BlogBox3 from "./BlogBox3";
import BlogBoxSimple from "./BlogBoxSimple";
import CategoryTitle from "./CategoryTitle";
function Home(props) {
  const [latest, setLatest] = useState([]);
  const [trendings, setTrendings] = useState([]);
  useEffect(()=>{
        axios.get(window.ENV.ARTICLE_SERVICE_URI).then(res=>{
            setLatest(res.data.splice(-3))
        })
        axios.get(window.ENV.ARTICLE_SERVICE_URI+"/hot").then(res=>{
          setTrendings(res.data)
      })
  }, [])
    return (
      <div>
        <section className="section first-section">
          <div className="container-fluid">
            <div className="masonry-blog clearfix">
              <h1 className="ml-4">Latest articles</h1>
              <div className="row">
                {latest.map((article, index)=>{
                  if(index < 3) return(
                    <div className="col-lg-4">
                      <BlogBox1 article={article} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <h1 className="ml-4">Trendings</h1>
          <div className="container">
            <div className="row">
              {trendings.map((article, index)=>{
                  if(index < 2) return(
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      {article.tags.map((tag, index)=>(
                      <CategoryTitle color={"color-aqua"} tag={tag.id} />
                      ))}
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <BlogBox2 article={article} image={"upload/blog_05.jpg"} />
                        </div>
                      </div>
                    </div>
                  )})}
            </div>
          </div>
        </section>
      </div>
    );
}


export default Home;
