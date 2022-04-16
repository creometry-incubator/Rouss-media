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
                                        <BlogFooterCard article={article}/>
                                        )
                                    })}
                                    </div>
                                </div>
                            </div>
                            <div className="widget">
                                <h2 className="widget-title">Popular Categories</h2>
                                <div className="link-widget">
                                    <ul>
                                        <li><a href="#">Fahsion <span>(21)</span></a></li>
                                        <li><a href="#">Lifestyle <span>(15)</span></a></li>
                                        <li><a href="#">Art & Design <span>(31)</span></a></li>
                                        <li><a href="#">Health Beauty <span>(22)</span></a></li>
                                        <li><a href="#">Clothing <span>(66)</span></a></li>
                                        <li><a href="#">Entertaintment <span>(11)</span></a></li>
                                        <li><a href="#">Food & Drink <span>(87)</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
        );
    }
}
 
export default Sidebar;