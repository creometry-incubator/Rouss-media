import React, { Component } from 'react';
class BlogFooterCard extends Component {
    render() { 
        return (
            <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 justify-content-between">
                                            <img src="upload/blog_square_07.jpg" alt="" className="img-fluid float-left"/>
                                            <h5 className="mb-1">10 practical ways to choose organic vegetables</h5>
                                            
                                        </div>
                                    </a>
        );
    }
}
 
export default BlogFooterCard;