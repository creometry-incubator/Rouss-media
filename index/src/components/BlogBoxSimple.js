import React, { Component } from 'react';
class BlogBoxSimple extends Component {
    render() { 
        return (
            <div>
                <div class="blog-box">
                            <div class="post-media">
                                <a href="single.html" title="">
                                    <img src="upload/blog_11.jpg" alt="" class="img-fluid"/>
                                    <div class="hovereffect">
                                        <span class="videohover"></span>
                                    </div>
                                </a>
                            </div>
                            <div class="blog-meta">
                                <h4><a href="single.html" title="">Nostalgia at work</a></h4>
                                <small><a href="blog-category-01.html" title="">Videos</a></small>
                                <small><a href="blog-category-01.html" title="">20 July, 2017</a></small>
                            </div>
                        </div>

                        <hr class="invis"/>
            </div>
        );
    }
}
 
export default BlogBoxSimple;