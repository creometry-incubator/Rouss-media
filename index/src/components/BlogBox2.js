import React, { Component } from 'react';
class BlogBox2 extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return (
            <div class="blog-box">
                                    <div class="post-media">
                                        <a href="single.html" title="">
                                            <img src={this.props.article.imageLink} alt="" class="img-fluid"/>
                                            <div class="hovereffect">
                                                <span></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="blog-meta big-meta">
                                        <h4><a href="single.html" title="">{this.props.article.title}</a></h4>
                                        <small><a href="blog-category-01.html" title="">Lifestyle</a></small>
                                        <small><a href="single.html" title="">{(new Date(this.props.article.updatedAt)).toDateString()}</a></small>
                                        <small><a href="blog-author.html" title="">by Amanda</a></small>
                                    </div>
                                </div>
        );
    }
}
 
export default BlogBox2;