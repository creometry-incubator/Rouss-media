import React, { Component } from "react";
class BlogBox4 extends Component {
    constructor(props){
        super()
    }
  render() {
    return (
        <div className="pitem item-w1 item-h1">
                                    <div className="blog-box">
                                        <div className="post-media">
                                            <a href={'/#/'+this.props.article._id} title="">
                                                <img src={this.props.article.imageLink} alt="" className="img-fluid"/>
                                                <div className="hovereffect">
                                                    <span></span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="blog-meta">
                                            {this.props.article.tags.map((tag, index)=>(
                                                <span key={"blogbox4-tags-"+index} className="bg-grey"><a href={'/#/'+this.props.article._id} title="">{tag.text}</a></span>
                                            ))}
                                            <h4><a href={'/#/'+this.props.article._id} title="">{this.props.article.title}</a></h4>
                                            <small><a href={'/#/'+this.props.article._id} title="">By: {this.props.article.author.username}</a></small>
                                            <small><a href={'/#/'+this.props.article._id} title="">{(new Date(this.props.article.updatedAt)).toDateString()}</a></small>
                                        </div>
                                    </div>
                                </div>
    );
  }
}

export default BlogBox4;
