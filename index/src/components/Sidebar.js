import React, { Component } from 'react';
import BlogFooterCard from './BlogFooterCard';
import SearchBar from './SearchComponent';
class Sidebar extends Component {
    render() { 
        return (
            <div class="sidebar">
                            <SearchBar />
                            <div class="widget">
                                <h2 class="widget-title">Recent Posts</h2>
                                <div class="blog-list-widget">
                                    <div class="list-group">
                                        <BlogFooterCard />
                                        <BlogFooterCard />
                                        <BlogFooterCard />

                                    </div>
                                </div>
                            </div>
                            <div class="widget">
                                <h2 class="widget-title">Popular Categories</h2>
                                <div class="link-widget">
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