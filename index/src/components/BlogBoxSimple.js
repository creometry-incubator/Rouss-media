import React, { Component } from 'react';
class BlogBoxSimple extends Component {
    render() { 
        return (
            <div>
                <div className="blog-box">
                            <div className="post-media">
                                <a href="single.html" title="">
                                    <img src="upload/blog_11.jpg" alt="" className="img-fluid"/>
                                    <div className="hovereffect">
                                        <span className="videohover"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="blog-meta">
                                <h4><a href="single.html" title="">Nostalgia at work</a></h4>
                                <small><a href="blog-category-01.html" title="">Videos</a></small>
                                <small><a href="blog-category-01.html" title="">20 July, 2017</a></small>
                            </div>
                        </div>

                        <hr className="invis"/>
            </div>
        );
    }
}
 
export default BlogBoxSimple;