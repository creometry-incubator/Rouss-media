import React, { Component } from 'react';
class BlogBox1 extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return (
            <div class="masonry-box post-media">
                             <img src={this.props.article.imageLink} alt="" class="img-fluid"/>
                             <div class="shadoweffect">
                                <div class="shadow-desc">
                                    <div class="blog-meta">
                                    {this.props.article.tags.map((tag, index)=>(
                                                <span class="bg-grey"><a href="blog-category-01.html" title="">{tag.text}</a></span>
                                            ))}                                        <h4><a href="single.html" title="">{this.props.article.title}</a></h4>
                                        <small><a href="single.html" title="">{(new Date(this.props.article.updatedAt)).toDateString()}</a></small>
                                        <small><a href="blog-author.html" title="">by Amanda</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>
        );
    }
}
 
export default BlogBox1;