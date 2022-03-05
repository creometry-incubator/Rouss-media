import React, { Component } from 'react';
class CategoryTitle extends Component {
    render() { 
        return (
            <div class="section-title">
                            <h3 class={this.props.color}><a href="blog-category-01.html" title="">Health</a></h3>
                        </div>
        );
    }
}
 
export default CategoryTitle;