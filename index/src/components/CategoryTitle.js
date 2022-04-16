import React, { Component } from 'react';
class CategoryTitle extends Component {
    render() { 
        return (
            <div className="section-title">
                            <h3 className={this.props.color}><a href="blog-category-01.html" title="">{this.props.tag}</a></h3>
                        </div>
        );
    }
}
 
export default CategoryTitle;