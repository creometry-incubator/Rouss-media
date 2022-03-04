import React, { Component } from 'react';
class SearchBar extends Component {
    render() { 
        return (
            <div class="widget">
                                <h2 class="widget-title">Search</h2>
                                <form class="form-inline search-form">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Search on the site"/>
                                    </div>
                                    <a type="submit" href="search.html" class="btn btn-primary"><i class="fa fa-search"></i></a>
                                </form>
                            </div>
        );
    }
}
 
export default SearchBar;