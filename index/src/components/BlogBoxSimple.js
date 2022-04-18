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
                                <a href={"/#/"+this.props.article._id} title="">
                                    <img src={this.props.article.imageLink} alt="" className="img-fluid"/>
                                    <div className="hovereffect">
                                        <span className="videohover"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="blog-meta">
                                <h4><a href="" title="">{this.props.article.title} </a></h4>
                                <small>{(new Date(this.props.article.updatedAt)).toDateString()} </small>
                            </div>
                        </div>
            </div>
        );
    }
}
 
export default BlogBoxSimple;