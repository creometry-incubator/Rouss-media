import axios from 'axios';
import React, { Component } from 'react';
import BlogFooterCard from './BlogFooterCard';
import SearchBar from './SearchComponent';
class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
          recent: [],
        }
      }
      componentDidMount(){
        axios.get(window.ENV.ARTICLE_SERVICE_URI).then(res=>{
          this.setState({recent: res.data})
      })}
    render() { 
        return (
            <div className="sidebar">
                            <SearchBar />
                            <div className="widget">
                                <h2 className="widget-title">Recent Posts</h2>
                                <div className="blog-list-widget">
                                    <div className="list-group">
                                    {this.state.recent.map((article, index)=>{
                                        if(index < 3) return(
                                        <BlogFooterCard key={"sidebar-recent-"+index} article={article}/>
                                        )
                                    })}
                                    </div>
                                </div>
                            </div>
                        </div>
        );
    }
}
 
export default Sidebar;