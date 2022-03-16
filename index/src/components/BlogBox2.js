import React, { Component } from 'react';
class BlogBox2 extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return (
            <div class="blog-box">
                                    <div class="post-media">
                                        <a href={'/#/'+this.props.article._id} title="">
                                            <img src={this.props.article.imageLink} alt="" class="img-fluid"/>
                                            <div class="hovereffect">
                                                <span></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="blog-meta big-meta">
                                        <h4><a href={'/#/'+this.props.article._id} title="">{this.props.article.title}</a></h4>
                                        <small><a href={'/#/'+this.props.article._id} title="">Lifestyle</a></small>
                                        <small><a href={'/#/'+this.props.article._id} title="">{(new Date(this.props.article.updatedAt)).toDateString()}</a></small>
                                        <small><a href={'/#/'+this.props.article._id} title="">by {this.props.article.author.username}</a></small>
                                    </div>
                                </div>
        );
    }
}
 
export default BlogBox2;