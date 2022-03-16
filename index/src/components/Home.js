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
            //get random articles
            let trends = []
            for(let i =0; i<2; i++){
              let art = res.data[Math.floor(Math.random()*res.data.length)]
              if(art)
              trends.push(art)
            } 
            setTrendings(trends);
            setLatest(res.data.splice(-3))

        })
  }, [])
    return (
      <div>
        <section class="section first-section">
          <div class="container-fluid">
            <div class="masonry-blog clearfix">
              <h1 class="ml-4">Latest articles</h1>
              <div className="row">
                {latest.map((article, index)=>(
                  <div className="col-lg-4">
                  <BlogBox1 article={article} />
                </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section class="section">
          <h1 class="ml-4">Trendings</h1>
          <div class="container">
            <div class="row">
              {trendings.map((article, index)=>(
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <CategoryTitle color={"color-aqua"} />
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <BlogBox2 article={article} image={"upload/blog_05.jpg"} />
                  </div>
                </div>
              </div>
              ))}
            </div>
            <hr class="invis1" />
            <h1 class="">Hot categories</h1>
            {/* {<div class="row">
              <div class="col-lg-9">
                <div class="blog-list clearfix">
                  <CategoryTitle color={"color-green"} />

                  <BlogBox3 />
                  <BlogBox3 />
                </div>
                <hr class="invis" />
                <div class="blog-list clearfix">
                  <CategoryTitle color={"color-red"} />

                  <BlogBox3 />
                </div>
              </div>
              <div class="col-lg-3">
                <CategoryTitle color={"color-yellow"} />
                <BlogBoxSimple />
                <BlogBoxSimple />
                <CategoryTitle color={"color-grey"} />
                <BlogBoxSimple />
              </div>
            </div>} */}
          </div>
        </section>
      </div>
    );
}


export default Home;
