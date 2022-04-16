import React, { Component } from 'react';
class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ""
        }
    }
    render() { 
        return (
            <div className="widget">
                                <h2 className="widget-title">Search</h2>
                                <div className="form-inline search-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Search on the site" onChange={(e)=>this.setState({search: e.target.value})}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={()=>{window.location = "/#/search?filter="+this.state.search;window.location.reload();}}><i className="fa fa-search"></i></button>
                                </div>
                            </div>
        );
    }
}
 
export default SearchBar;