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
                                    <div className="hovereffect">
                                        <span className="videohover"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="blog-meta">
                                <h4><a href="single.html" title="">{this.props.title} </a></h4>
                                <small>{this.props.date} </small>
                            </div>
                        </div>
            </div>
        );
    }
}
 
export default BlogBoxSimple;