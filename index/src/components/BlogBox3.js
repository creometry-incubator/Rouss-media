import React, { Component } from 'react';
class BlogBox3 extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return (
            <div>
                
                <div class="blog-box row">
                                <div class="col-md-4">
                                    <div class="post-media">
                                        <a href="single.html" title="">
                                            <img src={this.props.article.imageLink} alt="" class="img-fluid"/>
                                            <div class="hovereffect"></div>
                                        </a>
                                    </div>
                                </div>

                                <div class="blog-meta big-meta col-md-8">
                                    <h4><a href="single.html" title="">{this.props.article.title}</a></h4>
                                    <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                                    <small><a href="blog-category-01.html" title="">Travel</a></small>
                                    <small><a href="single.html" title="">{(new Date(this.props.article.updatedAt)).toDateString()}</a></small>
                                    <small><a href="blog-author.html" title="">by Boby</a></small>
                                </div>
                            </div>

                            <hr class="invis"/>
            </div>
        );
    }
}
 
export default BlogBox3;