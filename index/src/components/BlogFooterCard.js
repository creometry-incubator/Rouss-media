import React, { Component } from 'react';
class BlogFooterCard extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return (
            <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 justify-content-between">
                                            <img src={this.props.article.imageLink} alt="" className="img-fluid float-left"/>
                                            <h5 className="mb-1">{this.props.article.title}</h5>
                                            
                                        </div>
                                    </a>
        );
    }
}
 
export default BlogFooterCard;