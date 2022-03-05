import React, { Component } from "react";
class BlogBox4 extends Component {
    constructor(props){
        super()
    }
  render() {
    return (
        <div class="pitem item-w1 item-h1">
                                    <div class="blog-box">
                                        <div class="post-media">
                                            <a href="single.html" title="">
                                                <img src={this.props.article.imageLink} alt="" class="img-fluid"/>
                                                <div class="hovereffect">
                                                    <span></span>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="blog-meta">
                                            {this.props.article.tags.map((tag, index)=>(
                                                <span class="bg-grey"><a href="blog-category-01.html" title="">{tag.text}</a></span>
                                            ))}
                                            <h4><a href="single.html" title="">{this.props.article.title}</a></h4>
                                            <small><a href="blog-author.html" title="">By: Jessica</a></small>
                                            <small><a href="blog-category-01.html" title="">{(new Date(this.props.article.updatedAt)).toDateString()}</a></small>
                                        </div>
                                    </div>
                                </div>
    );
  }
}

export default BlogBox4;
