import React, { Component } from 'react';
class BlogBox3 extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return (
            <div>
                
                <div className="blog-box row">
                                <div className="col-md-4">
                                    <div className="post-media">
                                        <a href={'/#/'+this.props.article._id} title="">
                                            <img src={this.props.article.imageLink} alt="" className="img-fluid"/>
                                            <div className="hovereffect"></div>
                                        </a>
                                    </div>
                                </div>

                                <div className="blog-meta big-meta col-md-8">
                                    <h4><a href={'/#/'+this.props.article._id} title="">{this.props.article.title}</a></h4>
                                    <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                                    <small><a href={'/#/'+this.props.article._id} title="">Travel</a></small>
                                    <small><a href={'/#/'+this.props.article._id} title="">{(new Date(this.props.article.updatedAt)).toDateString()}</a></small>
                                    <small><a href={'/#/'+this.props.article._id} title="">by {this.props.article.author.username}</a></small>
                                </div>
                            </div>

                            <hr className="invis"/>
            </div>
        );
    }
}
 
export default BlogBox3;