import React, { Component } from 'react';
import BlogBox4 from './BlogBox4';
class SearchResult extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div class="page-title wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2> Term that I searched</h2>
                    </div>
                                       
                </div>
            </div>
        </div>

        <section class="section wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="portfolio row">
                                <div className=' col-md-4'>
                                    <BlogBox4 />
                                </div>
                                <div className=' col-md-4'>
                                    <BlogBox4 />
                                </div>
                                <div className=' col-md-4'>
                                    <BlogBox4 />
                                </div>
                            </div>
                        </div>

                        <hr class="invis"/>

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
                </div>
            </div>
        </section>
            </div>
        );
    }
}
 
export default SearchResult;