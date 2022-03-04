import React, { Component } from "react";
import BlogBox1 from "./BlogBox1";
import BlogBox2 from "./BlogBox2";
import BlogBox3 from "./BlogBox3";
import BlogBoxSimple from "./BlogBoxSimple";
import CategoryTitle from "./CategoryTitle";
class Home extends Component {
  render() {
    return (
      <div>
        <section class="section first-section">
          <div class="container-fluid">
            <div class="masonry-blog clearfix">
              <h1 class="ml-4">Latest articles</h1>
              <div className="row">
                <div className="col-lg-4">
                  <BlogBox1 image={"upload/blog_masonry_01.jpg "} />
                </div>
                <div className="col-lg-4">
                  <BlogBox1 image={"upload/blog_masonry_01.jpg "} />
                </div>
                <div className="col-lg-4">
                  <BlogBox1 image={"upload/blog_masonry_01.jpg "} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section">
          <h1 class="ml-4">Trendings</h1>
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <CategoryTitle color={"color-aqua"} />
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <BlogBox2 image={"upload/blog_05.jpg"} />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <CategoryTitle color={"color-aqua"} />
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <BlogBox2 image={"upload/blog_05.jpg"} />
                  </div>
                </div>
              </div>
            </div>
            <hr class="invis1" />
            <h1 class="">Hot categories</h1>
            <div class="row">
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
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
