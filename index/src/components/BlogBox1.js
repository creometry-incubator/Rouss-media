import React, { Component } from 'react';
class BlogBox1 extends Component {
    render() { 
        return (
            <div class="masonry-box post-media">
                             <img src={this.props.image} alt="" class="img-fluid"/>
                             <div class="shadoweffect">
                                <div class="shadow-desc">
                                    <div class="blog-meta">
                                        <span class="bg-aqua"><a href="blog-category-01.html" title="">Lifestyle</a></span>
                                        <h4><a href="single.html" title="">The golden rules you need to know for a positive life</a></h4>
                                        <small><a href="single.html" title="">24 July, 2017</a></small>
                                        <small><a href="blog-author.html" title="">by Amanda</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>
        );
    }
}
 
export default BlogBox1;