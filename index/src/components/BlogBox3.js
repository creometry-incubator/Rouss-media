import React, { Component } from 'react';
class BlogBox3 extends Component {
    render() { 
        return (
            <div>
                
                <div class="blog-box row">
                                <div class="col-md-4">
                                    <div class="post-media">
                                        <a href="single.html" title="">
                                            <img src="upload/blog_square_01.jpg" alt="" class="img-fluid"/>
                                            <div class="hovereffect"></div>
                                        </a>
                                    </div>
                                </div>

                                <div class="blog-meta big-meta col-md-8">
                                    <h4><a href="single.html" title="">5 Beautiful buildings you need to visit without dying</a></h4>
                                    <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                                    <small><a href="blog-category-01.html" title="">Travel</a></small>
                                    <small><a href="single.html" title="">21 July, 2017</a></small>
                                    <small><a href="blog-author.html" title="">by Boby</a></small>
                                </div>
                            </div>

                            <hr class="invis"/>
            </div>
        );
    }
}
 
export default BlogBox3;