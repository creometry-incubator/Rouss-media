import React, { Component } from 'react';
class BlogBoxSimple extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return (
            <div>
                <div className="blog-box">
                            <div className="post-media">
                                <a href="single.html" title="">
                                    <img src={this.props.image} alt="" className="img-fluid"/>
                                    
                                </a>
                            </div>
                            <div className="blog-meta">
                                <h4><a href="single.html" title="">{this.props.title} </a></h4>
                                <small><a href="blog-category-01.html" title="">Videos</a></small>
                                <small><a href="blog-category-01.html" title="">{this.props.date} </a></small>
                            </div>
                        </div>

                        <hr className="invis"/>
            </div>
        );
    }
}
 
export default BlogBoxSimple;