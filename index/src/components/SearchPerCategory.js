import React, { Component } from 'react';
import BlogBoxSimple from './BlogBoxSimple';
import Sidebar from './Sidebar';
class SearchCategory extends Component {
    render() { 
        return (
            <div>
                <div className="page-title wb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2> Travel</h2>
                    </div>
                                     
                </div>
            </div>
        </div>

        <section className="section wb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div className="page-wrapper">
                            
                            <hr className="invis"/>

                            <div className="blog-grid-system">
                                <div className="row">
                                    <div className="col-md-6">
                                        <BlogBoxSimple />
                                    </div>
                                    <div className="col-md-6">
                                        <BlogBoxSimple />
                                    </div>
                                    <div className="col-md-6">
                                        <BlogBoxSimple />
                                    </div>
                                    <div className="col-md-6">
                                        <BlogBoxSimple />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <hr className="invis3"/>

                        <div className="row">
                            <div className="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
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