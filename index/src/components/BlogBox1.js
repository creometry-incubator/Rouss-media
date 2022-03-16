import React, { Component } from 'react';
class BlogBox1 extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return (
            <div class="masonry-box post-media">
                <a href={'/#/'+this.props.article._id} title="">
                                            <img src={this.props.article.imageLink} alt="" class="img-fluid"/>
                                            <div class="hovereffect"></div>
                                        </a>
                             <div class="shadoweffect">
                                <div class="shadow-desc">
                                    <div class="blog-meta">
                                    {this.props.article.tags.map((tag, index)=>(
                                                <span class="bg-grey"><a href={'/#/'+this.props.article._id} title="">{tag.text}</a></span>
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