import React, { Component } from 'react';
class BlogBox1 extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return (
            <div className="masonry-box post-media">
                <a href={'/#/'+this.props.article._id} title="">
                                            <img src={this.props.article.imageLink} alt="" className="img-fluid"/>
                                            <div className="hovereffect"></div>
                                        </a>
                             <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                    {this.props.article.tags.map((tag, index)=>(
                                                <span className="bg-grey"><a href={'/#/'+this.props.article._id} title="">{tag.text}</a></span>
                                            ))}                                        
                                        <h4><a href={'/#/'+this.props.article._id} title="">{this.props.article.title}</a></h4>
                                        <small><a href={'/#/'+this.props.article._id} title="">{(new Date(this.props.article.updatedAt)).toDateString()}</a></small>
                                        <small><a href={'/#/'+this.props.article._id} title="">by {this.props.article.author.username}</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>
        );
    }
}
 
export default BlogBox1;