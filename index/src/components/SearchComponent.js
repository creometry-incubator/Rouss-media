import React, { Component } from 'react';
class SearchBar extends Component {
    render() { 
        return (
            <div className="widget">
                                <h2 className="widget-title">Search</h2>
                                <form className="form-inline search-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Search on the site"/>
                                    </div>
                                    <a type="submit" href="" className="btn btn-primary"><i className="fa fa-search"></i></a>
                                </form>
                            </div>
        );
    }
}
 
export default SearchBar;