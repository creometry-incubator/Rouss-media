import React, { Component } from 'react';
class BlogBox2 extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return (
            <div className="blog-box">
                                    <div className="post-media">
                                        <a href={'/#/'+this.props.article._id} title="">
                                            <img src={this.props.article.imageLink} alt="" className="img-fluid"/>
                                            <div className="hovereffect">
                                                <span></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="blog-meta big-meta">
                                        <h4><a href={'/#/'+this.props.article._id} title="">{this.props.article.title}</a></h4>
                                        <small><a href={'/#/'+this.props.article._id} title="">{(new Date(this.props.article.updatedAt)).toDateString()}</a></small>
                                        <small><a href={'/#/'+this.props.article._id} title="">by {this.props.article.author.username}</a></small>
                                    </div>
                                </div>
        );
    }
}
 
export default BlogBox2;