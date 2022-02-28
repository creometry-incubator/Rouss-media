import React, { Component } from 'react';
import BlogBoxSimple from './BlogBoxSimple';
import Sidebar from './Sidebar';
class SearchCategory extends Component {
    render() { 
        return (
            <div>
                <div class="page-title wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2> Travel</h2>
                    </div>
                                     
                </div>
            </div>
        </div>

        <section class="section wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            
                            <hr class="invis"/>

                            <div class="blog-grid-system">
                                <div class="row">
                                    <div class="col-md-6">
                                        <BlogBoxSimple />
                                    </div>
                                    <div class="col-md-6">
                                        <BlogBoxSimple />
                                    </div>
                                    <div class="col-md-6">
                                        <BlogBoxSimple />
                                    </div>
                                    <div class="col-md-6">
                                        <BlogBoxSimple />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <hr class="invis3"/>

                        <div class="row">
                            <div class="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination justify-content-start">
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </section>
            </div>
        );
    }
}
 
export default SearchCategory;